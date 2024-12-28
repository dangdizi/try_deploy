import type { inputProps } from "@/types"

export const Input = ({ name, type, value, placeholder }: inputProps) => {
    return (
        <div>
            <input name={name} type={type} value={value} placeholder={placeholder} />
        </div>
    )
}
