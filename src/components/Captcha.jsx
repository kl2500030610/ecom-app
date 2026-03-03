import React, { useEffect, useRef, useState } from "react";

function Captcha({ onChange }) {
  const canvasRef = useRef(null);
  const [captchaText, setCaptchaText] = useState("");

  const generateCaptchaText = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#fce4ec";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw each character separately
    for (let i = 0; i < text.length; i++) {
      const x = 20 + i * 20;
      const y = 30 + Math.random() * 10;

      const angle = (Math.random() - 0.5) * 0.7; // random rotation

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      ctx.font = "bold 26px Arial";
      ctx.fillStyle = randomColor();
      ctx.fillText(text[i], 0, 0);

      ctx.restore();
    }

    // Noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = randomColor();
      ctx.beginPath();
      ctx.moveTo(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
      ctx.lineTo(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      );
      ctx.stroke();
    }

    // Noise dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = randomColor();
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        1.5,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  };

  const randomColor = () => {
    const r = Math.floor(Math.random() * 150);
    const g = Math.floor(Math.random() * 150);
    const b = Math.floor(Math.random() * 150);
    return `rgb(${r},${g},${b})`;
  };

  useEffect(() => {
    const text = generateCaptchaText();
    setCaptchaText(text);
    drawCaptcha(text);
  }, []);

  return (
    <div style={{ marginTop: "15px" }}>
      <canvas ref={canvasRef} width="180" height="60" />

      <input
        type="text"
        placeholder="Enter Captcha"
        onChange={(e) => onChange(e.target.value, captchaText)}
        style={{
            marginTop: "15px",
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc",
            boxSizing: "border-box"
        }}
      />
    </div>
  );
}

export default Captcha;