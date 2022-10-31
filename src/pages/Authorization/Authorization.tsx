import { useEffect } from 'react'
import { getAccessToken, getPermissions, getUser } from '../../utilities'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { userStore } from '../../state/UserStore';
import { uiStore } from '../../state';

function Authorization() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const store = userStore()
  const uiState = uiStore()

  useEffect(() => {
    if (searchParams.get('code') === null) {
      location.replace(getPermissions())
    } else {
      const code = searchParams.get('code')
      let access_token: string
      let refresh_token: string
      getAccessToken(code!)
        .then((access) => {
          access_token = access.access_token 
          refresh_token = access.refresh_token 
          getUser({code: access.access_token})
            .then((data) => {
              //dispatch(logIn({ ...data, refresh_token: refresh_token, access_token: access_token, time: access.expires_in + Date.now()}))
              store.addUser({ ...data, refresh_token: refresh_token, access_token: access_token, time: access.expires_in + Date.now()})
              uiState.setNavVisible()
            })
        })
        
    }
    navigate('/')
  }, [])

  return (
    <div>
      <h1>Auth</h1>
      {store.actualUser.image ? (<img src={store.actualUser.image}/>): null}
      {store.actualUser.image ? (<h1>{store.actualUser.name}</h1>): null}
      {store.actualUser.image ? (<h1>{store.actualUser.time}  {Date.now()}</h1>): null}
      <p>{searchParams.get('code')}</p>
    </div>
  )
}

export default Authorization