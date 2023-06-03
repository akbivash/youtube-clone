
const Modal = ({children}:any) => {
console.log(children  !== '')
  return (
    <>
 {children !== undefined &&    <div className=" fixed z-50 top-2  text-green-700 bg-white border-green-800 border-[1px] px-4 rounded-md right-2">
    {children}
    </div>}
    </>
  )
}

export default Modal