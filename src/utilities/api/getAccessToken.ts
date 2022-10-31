import { AccessToken, UserInfo } from "../../models"
import {Buffer} from 'buffer'
import { getUserLocal, updateUserLocal } from "../persistUserLocal"

export default async function getAcessToken  (code: string) {
  const url = 'https://accounts.spotify.com/api/token'
  const client_id = import.meta.env.VITE_CLIENT_ID
  const client_secret = import.meta.env.VITE_CLIENT_SECRET
  console.log(`Basic ${new Buffer(client_id +':'+ client_secret).toString('base64')}`)

  let urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("code", code);
  urlencoded.append("redirect_uri", import.meta.env.VITE_PROD ? 'https://spotie-profile.netlify.app/auth' :'http://localhost:3000/auth');

  const res = await fetch(url,{
    method: 'POST',
    body: urlencoded,
    headers: {
      'Authorization': ` Basic ${new Buffer(client_id +':'+ client_secret).toString('base64')}`
    },
  })
  const body:AccessToken = await res.json()
  return body
}

export async function refreshToken  () {
  const url = 'https://accounts.spotify.com/api/token'
  const client_id = import.meta.env.VITE_CLIENT_ID
  const client_secret = import.meta.env.VITE_CLIENT_SECRET
  const user = getUserLocal()
  let urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", user?.refresh_token!);

  const res = await fetch(url,{
    method: 'POST',
    body: urlencoded,
    headers: {
      'Authorization': ` Basic ${new Buffer(client_id +':'+ client_secret).toString('base64')}`
    },
  })
  const body:AccessToken = await res.json()
  const newUser: UserInfo = {...user, access_token: body.access_token, time: Date.now() + body.expires_in}
  updateUserLocal(newUser)
  return body
}

export async function checkRefresh () {
  const expitation_time = 3600 * 1000;
  //const userState = userStore();
  const user = getUserLocal()

  if(Date.now() - user.time > expitation_time) {
    console.log('refrescando')
    return await refreshToken()
  } 
}