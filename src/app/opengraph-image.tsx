import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

// Generated at build time. Replace with a static public/og.png later if you
// want a custom design (then delete this file and set openGraph.images).
export const dynamic = "force-static";
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#fafaf9",
          color: "#1c1917",
          fontFamily: "sans-serif",
          borderTop: "16px solid #4338ca",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 20,
            background: "#4338ca",
            color: "#ffffff",
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -3 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#4338ca", marginTop: 8 }}>
            {`${profile.title} · ${profile.location}`}
          </div>
          <div style={{ fontSize: 32, color: "#625d58", marginTop: 28, maxWidth: 950 }}>
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
