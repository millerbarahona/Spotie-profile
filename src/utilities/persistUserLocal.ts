import { UserInfo } from "../models";

export function saveUsarLocal (user: UserInfo) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUserLocal () {
  const local: string | null = localStorage.getItem('user')
  let user: UserInfo | null 

  local ? 
    user = JSON.parse(local)
   : null

  return user!
}

export function updateUserLocal (user: UserInfo) {
  localStorage.setItem('user', JSON.stringify({...user}))
}

export function removeUserLocal () {
  localStorage.removeItem('user')
}