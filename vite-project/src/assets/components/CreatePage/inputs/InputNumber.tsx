import type { TextInputProps } from "../../../../types/types"

export const InputNumber = ({
  children,
  name,
  placeholder,
  value,
  handleChange
}: TextInputProps) => {
  return (
    <div className="form-container">
      <label htmlFor="distance" className="label-form">
        {children}
      </label>
      <input
        type="number"
        id={name}
        placeholder={placeholder}
        name={name}
        className="form-input"
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
