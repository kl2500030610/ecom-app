import React, { useState, useEffect } from "react";

function Captcha({ onChange }) {
  const [captcha, setCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div>
      <div style={styles.captchaBox}>{captcha}</div>

      <input
        type="text"
        placeholder="Enter verification code"
        onChange={(e) => onChange(e.target.value, captcha)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  captchaBox: {
    fontSize: "30px",
    fontWeight: "bold",
    letterSpacing: "6px",
    background: "#fce4ec",
    padding: "12px",
    display: "inline-block",
    marginBottom: "10px",
    transform: "rotate(-8deg) skewX(10deg)",
    fontFamily: "Comic Sans MS",
    color: "#e91e63",
    textDecoration: "line-through",
    userSelect: "none"
  }
};

export default Captcha;