import  TracksResponse from "../models/TracksResponse"

interface Props {
  time?: string, 
  limit?: number, 
  code: string
}

export default async function getTracks(props: Props) {
  const url = `https://api.spotify.com/v1/me/top/artists?limit=${props.limit ? props.limit : 50}&time_range=${props.time ? props.time : 'long_term'}`
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:TracksResponse = await res.json()
  return body
}