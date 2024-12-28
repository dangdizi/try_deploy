import type { buttonProps } from "@/types"

export const Button = ({ type, text, onClick }: buttonProps) => {
    return (
        <div>
            <button type={type} onClick={onClick}>{text}</button>
        </div>
    )
}
