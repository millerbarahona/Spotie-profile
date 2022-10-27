import { Track, TrackResponse } from '../../models' 
import { checkRefresh } from '../'

interface Props {
  time?: string, 
  limit?: number,
  id?: string,
  code: string
}

export async function getTracks(props: Props) {
  const url = `https://api.spotify.com/v1/me/top/tracks?limit=${props.limit ? props.limit : 50}&time_range=${props.time ? props.time : 'long_term'}`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body:TrackResponse = await res.json()
  return body
}

export async function getTrack (props: Props) {
  const url = `	https://api.spotify.com/v1/tracks/${props.id}`
  await checkRefresh()
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${props.code}`
    }
  })
  const body: Track = await res.json()
  return body
}