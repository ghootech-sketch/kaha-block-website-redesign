import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0B2447",
          padding: "48px",
          position: "relative",
        }}
      >
        {/* Accent border bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "16px",
            backgroundColor: "#D90429",
          }}
        />
        {/* Accent top stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#FFC300",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-1px",
              textTransform: "uppercase",
            }}
          >
            KAHA <span style={{ color: "#D90429", marginLeft: "16px" }}>BLOCK</span>
          </span>
        </div>

        <div
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#FFC300",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Pabrik Paving Block Berkualitas di Indonesia
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#E2E8F0",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Paving Block Full Otomatis Hidrolik • Mutu K-250, K-300, K-400 • PT Kaha Sukses Mandiri
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
