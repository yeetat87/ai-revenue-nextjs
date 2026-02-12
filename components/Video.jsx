"use client";

import { useState } from "react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "ZHv9XuC2De8";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="sec sec-dark">
      <div className="sec-inner center sr">
        <span className="tag">// Watch This First</span>
        <h2>
          Most AI Founders Are Building Impressive Demos{" "}
          <span className="t-cyan">Nobody Pays For</span>
        </h2>
        <p style={{ maxWidth: 620, margin: "0 auto 12px" }}>
          In Less than 2 minutes, discover why the most skilled AI builders are
          often the worst at making money and the counterintuitive system that
          flips this entirely.
        </p>
        <div
          className="vid-wrap sr sr-zoom"
          style={{
            background: "rgba(255,255,255,0.03)",
            cursor: isPlaying ? "default" : "pointer",
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            width: "100%",
            maxWidth: 720,
            aspectRatio: "16/9",
            margin: "32px auto 0",
            border: "1px solid rgba(0,255,255,0.15)",
            boxShadow: "0 0 40px rgba(0,255,255,0.08)",
          }}
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img
                src={thumbnailUrl}
                alt="Video Thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: 0.8,
                  transition: "opacity 0.3s",
                }}
              />
              <div
                className="play-btn-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(6,6,17,0.3)",
                  transition: "background 0.3s",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 30px var(--cyan-glow)",
                    transform: "scale(1)",
                    transition:
                      "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 6L18 12L7 18V6Z"
                      fill="#060611"
                      stroke="#060611"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ display: "block" }}
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
