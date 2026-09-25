"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface RevealGroupContextValue {
  isVisible: boolean;
  staggerInterval: number;
}

const RevealGroupContext = createContext<RevealGroupContextValue | null>(null);

// =============================================================================
// SHARED OBSERVER & REDUCED MOTION CACHE
// Eliminates instantiating dozens of IntersectionObserver instances and repeated
// window.matchMedia queries during hydration, directly reducing Total Blocking Time.
// =============================================================================
let cachedReducedMotion: boolean | null = null;

function isReducedMotion(): boolean {
  if (cachedReducedMotion === null && typeof window !== "undefined") {
    cachedReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return cachedReducedMotion ?? false;
}

type ObserverCallback = () => void;
const observerCallbacks = new Map<Element, ObserverCallback>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (!sharedObserver && typeof window !== "undefined" && "IntersectionObserver" in window) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb();
              observerCallbacks.delete(entry.target);
            }
            sharedObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
  }
  return sharedObserver;
}

function observeElement(elem: Element, callback: ObserverCallback): () => void {
  if (isReducedMotion() || typeof IntersectionObserver === "undefined") {
    callback();
    return () => {};
  }

  const observer = getSharedObserver();
  if (!observer) {
    callback();
    return () => {};
  }

  observerCallbacks.set(elem, callback);
  observer.observe(elem);

  return () => {
    observerCallbacks.delete(elem);
    observer.unobserve(elem);
  };
}

export interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerInterval?: number; // in seconds, default 0.08 (80ms)
  threshold?: number; // default 0.1
  rootMargin?: string; // default "0px 0px -40px 0px"
  id?: string;
  as?: React.ElementType;
}

export function RevealGroup({
  children,
  className = "",
  staggerInterval = 0.08,
  id,
  as: Component = "div",
}: RevealGroupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElem = groupRef.current;
    if (!currentElem) return;
    return observeElement(currentElem, () => {
      setIsVisible(true);
    });
  }, []);

  return (
    <RevealGroupContext.Provider value={{ isVisible, staggerInterval }}>
      <Component id={id} ref={groupRef} className={className}>
        {children}
      </Component>
    </RevealGroupContext.Provider>
  );
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in seconds
  staggerIndex?: number;
  staggerInterval?: number; // in seconds
  baseDelay?: number; // in seconds
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // in seconds, default 0.6
  id?: string;
  immediate?: boolean;
  as?: React.ElementType;
}

export function Reveal({
  children,
  className = "",
  delay,
  staggerIndex,
  staggerInterval,
  baseDelay = 0,
  direction = "up",
  duration = 0.6,
  id,
  immediate = false,
  as: Component = "div",
}: RevealProps) {
  const groupContext = useContext(RevealGroupContext);
  const [localIsVisible, setLocalIsVisible] = useState(immediate);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate || groupContext) return;

    const currentElem = domRef.current;
    if (!currentElem) return;

    return observeElement(currentElem, () => {
      setLocalIsVisible(true);
    });
  }, [immediate, groupContext]);

  const isVisible = immediate
    ? true
    : groupContext
    ? groupContext.isVisible
    : localIsVisible;

  let computedDelay = 0;
  if (delay !== undefined) {
    computedDelay = delay;
  } else if (staggerIndex !== undefined) {
    const interval =
      staggerInterval ?? groupContext?.staggerInterval ?? 0.08;
    computedDelay = baseDelay + staggerIndex * interval;
  } else {
    computedDelay = baseDelay;
  }

  const getDirectionClasses = () => {
    if (immediate) {
      return "opacity-100 translate-y-0";
    }

    switch (direction) {
      case "up":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6";
      case "down":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-6";
      case "left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-6";
      case "right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-6";
      case "none":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]";
    }
  };

  return (
    <Component
      id={id}
      ref={groupContext ? undefined : domRef}
      style={{
        transitionDelay: `${computedDelay}s`,
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-[opacity,transform] ease-out motion-reduce:transform-none motion-reduce:transition-none motion-reduce:opacity-100 ${getDirectionClasses()} ${className}`}
    >
      {children}
    </Component>
  );
}

export default function ScrollReveal(props: RevealProps) {
  return <Reveal {...props} />;
}

