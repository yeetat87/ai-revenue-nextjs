"use client";

import { useState } from "react";
import AvatarStack from "./AvatarStack";

export default function FinalCTA({ onCheckout }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("var(--text-dim)");
  const [borderColor, setBorderColor] = useState("rgba(255,255,255,0.1)");

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMsg("Sending...");
    setMsgColor("var(--text-dim)");

    try {
      const formData = new FormData();
      formData.append("email_address", email);

      const response = await fetch(
        "https://app.convertkit.com/forms/9065023/subscriptions",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setStatus("success");
        setMsg("Thanks for joining! You are in.");
        setMsgColor("var(--green)");
        setBorderColor("var(--green)");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMsg("");
          setMsgColor("var(--text-dim)");
          setBorderColor("rgba(255,255,255,0.1)");
        }, 5000);
      } else {
        setStatus("error");
        setMsg("Something went wrong. Please try again.");
        setMsgColor("var(--magenta)");
        setBorderColor("var(--magenta)");
      }
    } catch (error) {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
      setMsgColor("var(--magenta)");
      setBorderColor("var(--magenta)");
    }
  };

  return (
    <section className="sec sec-dark">
      <div className="sec-inner center sr">
        <h2>
          You Already Have the Skills.
          <br />
          Now Get the <span className="t-cyan">System.</span>
        </h2>
        <p>
          Every week you spend figuring this out alone is a week someone less
          skilled lands the client you should have. The system is ready. The
          question is whether you are.
        </p>
        <button
          className="stripe-btn-big"
          onClick={onCheckout}
          style={{ margin: "28px auto" }}
        >
          Get The AI Revenue System
          <br />
          USD $49
        </button>
        <div style={{ marginTop: 16 }}>
          <AvatarStack />
        </div>
        <span className="cta-note">
          🔒 30-Day Money-Back Guarantee · Instant Access · All Resources
          Included
        </span>

        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p style={{ fontSize: 15, color: "var(--text)", marginBottom: 6 }}>
            Not ready to commit yet? No pressure.
          </p>
          <p
            style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 18 }}
          >
            Drop your email and we&apos;ll send you more details so you can
            decide on your own time.
          </p>
          <form
            onSubmit={handleEmailSignup}
            style={{
              display: "flex",
              gap: 10,
              maxWidth: 420,
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              onFocus={() => setBorderColor("var(--cyan)")}
              onBlur={() => setBorderColor("rgba(255,255,255,0.1)")}
              style={{
                flex: 1,
                padding: "14px 16px",
                fontSize: 15,
                fontFamily: "var(--font-body)",
                border: `2px solid ${borderColor}`,
                borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
                color: "var(--white)",
                outline: "none",
                transition: "border-color 0.3s",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                padding: "14px 22px",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                background: "var(--cyan)",
                color: "var(--bg)",
                border: "none",
                borderRadius: 12,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "transform 0.2s, box-shadow 0.2s",
                opacity: status === "loading" ? 0.7 : 1,
              }}
              onMouseOver={(e) => {
                if (status !== "loading") {
                  e.target.style.transform = "scale(1.03)";
                  e.target.style.boxShadow = "0 0 20px rgba(0,240,255,0.3)";
                }
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              {status === "loading" ? "Sending..." : "Send Me Details"}
            </button>
          </form>
          <p
            style={{
              fontSize: 12,
              marginTop: 10,
              color: msgColor,
              minHeight: 18,
            }}
          >
            {msg}
          </p>
        </div>
      </div>
    </section>
  );
}
