"use client";
import React, { forwardRef } from "react";

interface InputPhoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
}

const InputPhone = forwardRef<HTMLInputElement, InputPhoneProps>(
  ({ error, ...props }, ref) => {
    return (
      <div>
        <input
          {...props}
          ref={ref}
          type="tel"
          maxLength={11}
          placeholder="eg: 09123456789"
          style={{
            borderColor: error ? "red" : undefined,
            padding: "0.5rem",
            fontSize: "1rem",
          }}
        />
        {error && (
          <p>
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputPhone.displayName = "InputPhone";

export default InputPhone;