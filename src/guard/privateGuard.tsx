import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { Login } from "../pages"
import { AppStore } from "../redux/store"
import { privateRoutes } from "../router/routes"

export default function PrivateGuard () {
  const userState = useSelector((store: AppStore) => store.user)

  const PrivatePage = <Navigate replace to={privateRoutes.PROFILE}/>
  const PublicPage = <Login />
  return userState.id !== '0' ? PublicPage : PrivatePage 
}