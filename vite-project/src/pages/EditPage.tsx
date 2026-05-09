import {
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom"
import { InputText } from "../assets/components/CreatePage/inputs/InputText"
import { TextareaInput } from "../assets/components/CreatePage/inputs/TextareaInput"
import { InputNumber } from "../assets/components/CreatePage/inputs/InputNumber"
import { SubmitBtn } from "../assets/components/CreatePage/inputs/SubmitBtn"
import { UploadInput } from "../assets/components/CreatePage/inputs/UploadInput"
import { toast } from "react-toastify"
import type { CreatePageProps } from "../types/types"
import { useEffect, useState } from "react"
import {
  getActiveImage,
  prepareEditFields
} from "../utils/PrepareEditFields"
export const EditPage = ({
  destinations,
  setDestinations,
  members,
  setMembers,
  technologies,
  setTechnologies
}: CreatePageProps) => {
  let navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams("")
  let type = searchParams.get("type")
  const { name } = useParams()
  let planetFound = destinations.find(
    (destination) => destination.name === name
  )
  let memberFound = members.find((member) => member.name === name)
  let technologyFound = technologies.find(
    (tech) => tech.name === name
  )

  const currentItem =
    type === "planet"
      ? planetFound
      : type === "member"
        ? memberFound
        : technologyFound
        
  // Determine the active image source using the helper function
  let activeImage = getActiveImage(
    type,
    planetFound,
    memberFound,
    technologyFound
  )

  const previewImage = activeImage ?? ""
  const currentName = currentItem?.name || ""
  const commonItem = type === "planet" ? planetFound : technologyFound
  const descriptiveItem = commonItem?.description || ""

  useEffect(() => {
    if (type === null) {
      setSearchParams("planet")
    }
  }, [type, searchParams])

  //Calling the helper function which brings our initial state for the edit fields
  const initialStates = prepareEditFields(
    type,
    currentName,
    descriptiveItem,
    planetFound,
    previewImage,
    memberFound
  )

  const [formData, setFormData] = useState(initialStates)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendData = (e: React.FormEvent) => {
    e.preventDefault()
    if (type === "planet") {
      let indexElement = destinations.findIndex(
        (destination) => destination.name === name
      )
      let planetsList = [...destinations]
      if (indexElement !== -1) {
        planetsList[indexElement] = {
          ...planetsList[indexElement],
          name: formData?.name || "",
          description: formData?.description || "",
          distance: formData?.distance || "",
          travel: formData?.travel || "",
          images: {
            ...(planetsList[indexElement].images || {}),
            webp: formData?.urlImage || ""
          }
        }
      }
      setDestinations(planetsList)
      localStorage.setItem(
        "destinations",
        JSON.stringify(planetsList)
      )
      toast.success(
        `${type[0].toUpperCase() + type.slice(1)} has been succesfully edited!`
      )
      navigate(`/destination?name=${formData.name}`)
    } else if (type === "member") {
      let indexElement = members.findIndex(
        (member) => member.name === name
      )
      let membersList = [...members]
      membersList[indexElement] = {
        ...membersList[indexElement],
        name: formData?.name || "",
        bio: formData?.bio || "",
        role: formData?.role || "",
        images: {
          ...(members[indexElement].images || {}),
          webp: formData?.urlImage || ""
        }
      }
      setMembers(membersList)
      localStorage.setItem("members", JSON.stringify(membersList))
      toast.success(
        `${type[0].toUpperCase() + type.slice(1)} has been succesfully edited!`
      )
      navigate(`/crew?name=${formData?.name}`)
    } else {
      let indexElement = technologies.findIndex(
        (tech) => tech.name === name
      )
      let technologiesList = [...technologies]
      technologiesList[indexElement] = {
        ...technologiesList[indexElement],
        name: formData?.name || "",
        description: formData?.description || "",
        images: {
          ...(technologies[indexElement].images || {}),
          landscape: formData?.urlImage || "",
          portrait: formData?.urlImage || ""
        }
      }
      setTechnologies(technologiesList)
      localStorage.setItem(
        "technologies",
        JSON.stringify(technologiesList)
      )
      toast.success("Technology has been succesfully edited!")
      navigate(`/tech?name=${formData?.name}`)
    }
  }

  return (
    <main className="h-full overflow-auto gap-y-10 md:gap-y-0 flex items-center md:items-center justify-center px-9 mb-20 md:mb-5  md:px-30 md:mt-10 py-6 max-w-[750px] mx-auto">
      <div className="container-form">
        <form className="form-control" onSubmit={sendData}>
          <h1 className="heading">Edit this {type}</h1>
          <InputText
            name="name"
            placeholder="Introduce the name..."
            maxLength={20}
            value={formData?.name}
            handleChange={handleChange}
          >
            Name
          </InputText>
          {type === "member" && (
            <TextareaInput
              name="bio"
              placeholder="Write his bio here"
              rows={4}
              value={formData?.bio ?? ""}
              handleChange={handleChange}
            >
              Bio
            </TextareaInput>
          )}
          {type === "member" && (
            <InputText
              name="role"
              placeholder="Introduce the role..."
              value={formData?.role ?? ""}
              handleChange={handleChange}
            >
              Role
            </InputText>
          )}
          {(type === "planet" || type === "technology") && (
            <TextareaInput
              name="description"
              placeholder="Introduce the description here..."
              rows={4}
              value={formData?.description ?? ""}
              handleChange={handleChange}
            >
              Descripton
            </TextareaInput>
          )}
          {type === "planet" && (
            <InputNumber
              name="distance"
              placeholder="Introduce the distance... eg:254"
              value={formData?.distance?.replace(/[^0-9]/g, "") ?? ""}
              handleChange={handleChange}
            >
              Distance
            </InputNumber>
          )}
          {type === "planet" && (
            <InputText
              name="travel"
              placeholder="Introduce the travel duration..."
              value={formData?.travel ?? ""}
              handleChange={handleChange}
            >
              Travel
            </InputText>
          )}
          <UploadInput
            required={true}
            url={formData?.urlImage ?? ""}
            onChange={handleChange}
          />
          <SubmitBtn>Edit</SubmitBtn>
        </form>
      </div>
    </main>
  )
}
