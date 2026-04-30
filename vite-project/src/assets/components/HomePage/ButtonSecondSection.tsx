export const ButtonSecondSection = ({
  message
}: {
  message: string
}) => {
  return (
    <>
      <button className="relative z-10 w-[150px] h-[150px] md:w-[274px] md:h-[274px] text-gray-400 bg-white text-deep-void rounded-full uppercase font-bellefair text-xl md:text-3xl tracking-[2px] transition-all">
        {message}
      </button>
    </>
  )
}
