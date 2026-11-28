// Single early bootstrap; keep GTM WhatsApp conversion tags disabled while direct dispatch is active.
export const googleMeasurementBootstrap = String.raw`(function () {
  if (!['kahablock.com', 'www.kahablock.com'].includes(location.hostname.toLowerCase())) return;
  if (window.__kaha_google_tag_initialized) return;
  window.__kaha_google_tag_initialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
  window.gtag('js', new Date());
  window.gtag('config', 'AW-18574524822');
  window.gtag('config', 'G-MWEEEMHL64');
  window.__ga4_tag_initialized = true;

  var processed = new WeakSet();
  var lastTime = 0;
  var lastHref = '';
  document.addEventListener('click', function (event) {
    if (processed.has(event)) return;
    var target = event.target;
    var anchor = target && typeof target.closest === 'function'
      ? target.closest('a[href]')
      : target && target.parentElement && target.parentElement.closest('a[href]');
    if (!anchor) return;
    try {
      var url = new URL(anchor.href, location.href);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
      if (url.hostname !== 'wa.me' && !url.hostname.endsWith('.wa.me')) return;
      processed.add(event);
      var now = Date.now();
      if (now - lastTime < 500 && lastHref === url.href) return;
      lastTime = now;
      lastHref = url.href;
      var payload = {
        page_path: location.pathname,
        link_url: url.origin + url.pathname,
        link_text: (anchor.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120) || 'WhatsApp',
        cta_id: anchor.id || 'unlabeled_whatsapp_link',
        whatsapp_phone: url.pathname.replace(/\D/g, '')
      };
      window.gtag('event', 'whatsapp_click', Object.assign({send_to: 'G-MWEEEMHL64'}, payload));
      window.gtag('event', 'conversion', {
        send_to: 'AW-18574524822/x2qSCNn1p7gdEJaDg5lF',
        value: 1.0,
        currency: 'IDR'
      });
      window.dataLayer.push(Object.assign({event: 'whatsapp_click'}, payload));
    } catch (_) {
      // Measurement must never interrupt WhatsApp navigation.
    }
  }, true);
})();`;
