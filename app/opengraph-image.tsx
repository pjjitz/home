import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #030712 0%, #0a1628 50%, #1e3a5f 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#60a5fa",
            marginBottom: 24,
          }}
        >
          Comunidade Católica Shalom
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
          PJJ Imperatriz
        </div>
        <div style={{ fontSize: 32, color: "#94a3b8", marginTop: 24, maxWidth: 800 }}>
          Juventude viva. Encontro real. Cristo no centro.
        </div>
        <div style={{ fontSize: 24, color: "#64748b", marginTop: 48 }}>
          Imperatriz, MA
        </div>
      </div>
    ),
    { ...size },
  );
}
