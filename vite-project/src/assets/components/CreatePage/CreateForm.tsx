import type {
  CreateFormProps,
  Crew,
  Destination,
  Technology
} from "../../../types/types"
import { UploadInput } from "./inputs/UploadInput"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { InputText } from "./inputs/InputText"
import { InputNumber } from "./inputs/InputNumber"
import { toast } from "react-toastify"
import { TextareaInput } from "./inputs/TextareaInput"
import { isNameFound } from "../../../utils/HandlerFunctions"
import { SubmitBtn } from "./inputs/SubmitBtn"
import { validateForm } from "../../../utils/FormValidationFunction"
export const CreateForm = ({
  type,
  destinations,
  setDestinations,
  technologies,
  setTechnologies,
  members,
  setMembers
}: CreateFormProps) => {
  const initialStates = {
    planet: {
      name: "",
      description: "",
      distance: "",
      travel: "",
      urlImage: ""
    },
    member: { name: "", bio: "", role: "", urlImage: "" },
    technology: { name: "", description: "", urlImage: "" }
  }

  const defaultState =
    initialStates[type as keyof typeof initialStates] ||
    initialStates.planet
  const [formData, setFormData] = useState<
    Destination | Crew | Technology
  >(defaultState)

  useEffect(() => {
    setFormData(initialStates[type as keyof typeof initialStates])
  }, [type])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()

    let isValid = validateForm(
      formData,
      type,
      isNameFound,
      destinations,
      members,
      technologies
    )
    if (!isValid) return
    if (type === "planet") {
      const newFormData = { ...formData, id: uuidv4() } as Destination
      setDestinations([newFormData, ...destinations])
      setFormData({
        name: "",
        description: "",
        distance: "",
        travel: "",
        urlImage: ""
      })
    } else if (type === "technology") {
      const newFormData = {
        ...formData,
        id: uuidv4()
      } as Omit<Technology, "images">
      setTechnologies([newFormData, ...technologies])
      setFormData({
        name: "",
        description: "",
        urlImage: ""
      })
    } else {
      const newFormData = {
        ...formData,
        id: uuidv4()
      } as Crew
      setMembers([newFormData, ...members])
      setFormData({
        name: "",
        bio: "",
        role: "",
        urlImage: ""
      })
    }
    toast.success(`The ${type} has been succesfully created!`)
  }
  return (
    <>
      <form onSubmit={handleForm} className="form-control">
        <h1 className="heading">Create a new {type}</h1>
        <InputText
          name="name"
          placeholder="Introduce the name..."
          value={formData.name}
          handleChange={handleChange}
          maxLength={12}
        >
          Name
        </InputText>
        {type === "member" && (
          <TextareaInput
            name="bio"
            placeholder="Write his bio here"
            rows={4}
            value={"bio" in formData ? formData.bio : ""}
            handleChange={handleChange}
          >
            Bio
          </TextareaInput>
        )}
        {type === "member" && (
          <InputText
            name="role"
            handleChange={handleChange}
            placeholder="Introduce the role..."
            value={"role" in formData ? formData.role : ""}
          >
            Role
          </InputText>
        )}
        {(type === "planet" || type === "technology") && (
          <TextareaInput
            name="description"
            placeholder="Introduce the description here..."
            value={
              "description" in formData ? formData.description : ""
            }
            handleChange={handleChange}
            rows={4}
          >
            Descripton
          </TextareaInput>
        )}
        {type === "planet" && (
          <InputNumber
            name="distance"
            placeholder="Introduce the distance... eg:254"
            value={"distance" in formData ? formData.distance : ""}
            handleChange={handleChange}
          >
            Distance
          </InputNumber>
        )}
        {type === "planet" && (
          <InputText
            name="travel"
            placeholder="Introduce the travel duration..."
            value={"travel" in formData ? formData.travel : ""}
            handleChange={handleChange}
          >
            Travel
          </InputText>
        )}
        <UploadInput
          required={true}
          onChange={handleChange}
          url={formData.urlImage}
        />
        <SubmitBtn> Submit </SubmitBtn>
      </form>
    </>
  )
}
