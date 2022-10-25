import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { Login } from "../pages"
import { AppStore } from "../redux/store"
import { privateRoutes } from "../router/routes"
import { userStore } from "../state/UserStore"

export default function PublicGuard () {
  //const userState = useSelector((store: AppStore) => store.user)
  const userState = userStore();

  const PrivatePage = <Navigate replace to={privateRoutes.PROFILE}/>
  const PublicPage = <Login />
  return userState.actualUser.id !== '0' ? PrivatePage : PublicPage
}