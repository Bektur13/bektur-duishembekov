import { ImageResponse } from "next/og";
import { hero, site } from "@/data/content";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          backgroundImage: "radial-gradient(circle at 50% -10%, rgba(77,124,255,0.45), rgba(10,10,10,0) 60%)",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 600, letterSpacing: -1 }}>
          {site.shortName}
          <span style={{ color: "#4d7cff" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, maxWidth: 980 }}>
            {`${hero.headline.lead} ${hero.headline.accent}`}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#8a8a8a" }}>
            {`${site.name} · CS @ Bellevue College · Open to SWE internships`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
