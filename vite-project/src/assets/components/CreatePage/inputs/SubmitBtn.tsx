export const SubmitBtn = ({ children }: { children: string }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 mx-auto max-w-[100px] cursor-pointer rounded-sm hover:bg-blue-700 text-white font-bold py-2 px-4"
    >
      {children}
    </button>
  )
}
