"use client";
import React from "react";

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function LoginButton({ loading, ...props }: LoginButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      style={{
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.7 : 1,
      }}
      {...props}
    >
      {loading ? "Loading..." : "LOGIN"}
    </button>
  );
}