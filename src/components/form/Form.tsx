"use client";
import type { formProps } from "@/types";
import { useRef } from "react";

export const Form = ({ children, action, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        action={async (formData) => {
          await action(formData);
          ref.current?.reset();
        }}
        ref={ref}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};
