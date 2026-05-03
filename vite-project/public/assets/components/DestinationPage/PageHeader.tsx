import type { PageHeaderProps } from "../../../types/types"

export const PageHeader = ({ number, title }: PageHeaderProps) => {
  return (
    <section className="mt-3 w-full flex flex-col gap-x-6 md:flex-row mb-10">
      <span className="text-[var(--color-star-dust)] font-bold text-3xl">
        {number}
      </span>
      <h3 className="text-2xl uppercase text-shadow-amber-50 font-light tracking-widest">
        {title}
      </h3>
    </section>
  )
}
