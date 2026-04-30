import marsImage from "../../destination/image-mars.webp"
import { PageHeader } from "./PageHeader"
export const FirstContainerSection = () => {
  return (
    <>
      <section className="first-section ">
        <div className="flex flex-col items-center lg:items-start w-full md:w-[500px]">
          <PageHeader number="01" title="Pick your destination" />
          <img
            src={marsImage}
            className="md:w-[400px] w-[350px] animate-[spin_30s_linear_infinite]"
            alt="Image with the moon"
          />
        </div>
      </section>
    </>
  )
}
