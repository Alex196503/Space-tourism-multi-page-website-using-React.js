export const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col text-center md:text-left py-10 md:gap-y-7 gap-y-4">
        <h1 className="text-8xl uppercase font-light tracking-wider">
          Mars
        </h1>
        <p className="text-[16px] leading-[1.7] text-gray-300 w-[400px] font-medium ">
          Don’t forget to pack your hiking boots. You’ll need them to
          tackle Olympus Mons, the tallest planetary mountain in our
          solar system. It’s two and a half times the size of Everest!
        </p>
        <hr className="mt-4 text-gray-700" />
      </section>
    </>
  )
}
