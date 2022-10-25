import { UserResponse } from "./UserResponse"

export interface UserInfo {
  id: string,
  name: string,
  image: string,
  time: number,
  userData?: UserResponse
  access_token: string,
  refresh_token: string
}

export const EmptyUserState: UserInfo = {
  id: '0',
  name: '',
  image: '', 
  time: 0,
  refresh_token: '',
  access_token: ''
}