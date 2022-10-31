import { UserInfo, UserResponse } from "../../models"

interface Props {
  code: string
}

export default async function getUser  ({code}: Props) {
  const url = 'https://api.spotify.com/v1/me'
  const res = await fetch(url,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${code}`
    }
  })
  const body: UserResponse = await res.json()
  console.log(body)
  const user: UserInfo = {
    name: body.display_name,
    id: body.id,
    image: body.images[0].url,
    userData: body,
    time: 0,
    access_token: '',
    refresh_token: ''
  }
  return user
}