import { Route, Routes } from "react-router-dom"

interface Props {
  children: JSX.Element[] | JSX.Element
}
function RoutesWithNotFount({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<>Not Found</>}/>

    </Routes>
  )
}

export default RoutesWithNotFount