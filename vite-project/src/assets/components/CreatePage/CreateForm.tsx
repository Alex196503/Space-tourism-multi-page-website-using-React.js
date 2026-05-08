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
import { TextareaInput } from "./inputs/TextareaInput"
import { toast } from "react-toastify"
import { isNameFound } from "../../../utils/HandlerFunctions"
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
  const [formData, setFormData] = useState(defaultState)

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
    if (formData.name.trim() === "") {
      toast.error("Name is required!")
      return
    }
    if (type === "planet" && formData.name.length >= 12) {
      toast.error(
        "Please introduce a name with less than 12 characters!"
      )
      return
    }
    if (
      type === "planet" &&
      "description" in formData &&
      formData.description.trim() === ""
    ) {
      toast.error("Description is required")
      return
    }
    if (
      type === "planet" &&
      isNameFound(destinations, formData.name)
    ) {
      toast.error("Name already exists!")
      return
    }
    if (type === "member" && isNameFound(members, formData.name)) {
      toast.error("Name already exists!")
      return
    }
    if (
      type === "technology" &&
      isNameFound(technologies, formData.name)
    ) {
      toast.error("Name already exists!")
      return
    }
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
      <form
        onSubmit={handleForm}
        className="w-full flex flex-col py-3 px-4 mt-4 gap-y-1"
      >
        <h1 className="text-2xl text-gray-900 py-3 font-bold text-center">
          Create a new {type}
        </h1>
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
        <button
          type="submit"
          className="bg-blue-500 mx-auto max-w-[100px] cursor-pointer rounded-sm hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Submit
        </button>
      </form>
    </>
  )
}
