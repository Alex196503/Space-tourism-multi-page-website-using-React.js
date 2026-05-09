import { type UploadInputProps } from "../../../../types/types"
export const UploadInput = ({
  required,
  onChange,
  url
}: UploadInputProps) => {
  return (
    <div className="form-container">
      <label htmlFor="urlImage" className="label-form">
        Put an URL for an image
      </label>
      <input
        type="text"
        id="urlImage"
        name="urlImage"
        className="form-input"
        pattern="^(https?:\/\/|\/|\.\/|\.\.\/).*\.(png|jpg|jpeg|gif|webp|svg)$"
        placeholder="e.g. /assets/destination/image-mars.png"
        required={required}
        onChange={onChange}
        value={url}
        title="Please introduce a valid URL that ends with .png, .jpg or .webp"
      />
    </div>
  )
}
