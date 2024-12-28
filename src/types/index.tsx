import type { ReactNode } from "react";

export interface inputProps {
    name: string;
    type: string;
    value?: string;
    placeholder?: string;
}

export interface buttonProps {
    type: "button" | "submit" | "reset";
    text: string;
    onClick?: () => void;
}

export interface formProps {
    children?: ReactNode;
    action: (formData: FormData) => void;
    onSubmit?: () => void;
}