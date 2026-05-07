import type { TextInputProps } from "../../../../types/types"

export const InputText = ({
  children,
  name,
  placeholder,
  value,
  handleChange,
  maxLength
}: TextInputProps) => {
  return (
    <div className="form-container">
      <label htmlFor={name} className="label-form">
        {children}
      </label>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        name={name}
        className="form-input"
        required
        value={value}
        onChange={handleChange}
        maxLength={maxLength || undefined}
      />
    </div>
  )
}
