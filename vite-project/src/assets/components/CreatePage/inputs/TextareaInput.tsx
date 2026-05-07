import type { TextareaProps } from "../../../../types/types"

export const TextareaInput = ({
  children,
  name,
  placeholder,
  value,
  handleChange,
  rows
}: TextareaProps) => {
  return (
    <div className="form-container">
      <label htmlFor={name} className="label-form">
        {children}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        name={name}
        className="textarea"
        rows={rows}
        required
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  )
}
