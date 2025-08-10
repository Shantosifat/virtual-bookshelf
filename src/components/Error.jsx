import React from "react";

const Error = () => {
  return (
    <div style={styles.container}>
      <svg
        style={styles.eye}
        viewBox="0 0 64 64"
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Eye outline */}
        <ellipse
          cx="32"
          cy="32"
          rx="30"
          ry="18"
          fill="none"
          stroke="#333"
          strokeWidth="4"
        />
        {/* Iris */}
        <circle
          cx="32"
          cy="32"
          r="10"
          fill="#6ab7ff"
          style={{ animation: "irisPulse 3s ease-in-out infinite" }}
        />
        {/* Pupil */}
        <circle
          cx="32"
          cy="32"
          r="5"
          fill="#003366"
          style={{ animation: "pupilMove 6s ease-in-out infinite" }}
        />
        {/* Highlight */}
        <circle cx="38" cy="26" r="3" fill="#aaddff" opacity="0.7" />
      </svg>

      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="/" style={styles.link}>
        Go back home
      </a>

      <style>
        {`
          @keyframes irisPulse {
            0%, 100% { r: 10; fill: #6ab7ff; }
            50% { r: 12; fill: #4a90e2; }
          }

          @keyframes pupilMove {
            0%, 100% { cx: 32; cy: 32; }
            25% { cx: 34; cy: 30; }
            50% { cx: 30; cy: 34; }
            75% { cx: 32; cy: 32; }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f4f8",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    textAlign: "center",
    padding: "0 20px",
  },
  eye: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.25rem",
    marginBottom: "30px",
    maxWidth: "400px",
  },
  link: {
    fontSize: "1.1rem",
    color: "#4a90e2",
    textDecoration: "none",
    border: "2px solid #4a90e2",
    padding: "10px 20px",
    borderRadius: "30px",
    transition: "all 0.3s ease",
  },
};

export default Error;
