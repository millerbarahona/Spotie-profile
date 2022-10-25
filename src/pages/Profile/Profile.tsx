import { useEffect } from 'react'
import { userStore, tracksStore } from '../../state';
import { getTracks, getUserLocal, refreshToken } from '../../utilities'
import styles from './Profile.module.css'

function Profile() {
  const userState = userStore();
  const tracksState = tracksStore()
  const EXPIRATION_TIME = 3600 * 1000;
  const user = getUserLocal()

  useEffect(() => {
    if (Date.now() - user.time > EXPIRATION_TIME) {
      console.log('Refrescando')
      refreshToken().then(response => {
        userState.setUser({ ...user, access_token: response.access_token, time: response.expires_in + Date.now() })
      })
    }
    getTracks({ code: userState.actualUser.access_token, limit: 5, time: 'short_term' }).then((res) => tracksState.addTracks(res.items))
  }, [])

  const logOut = () => {
    userState.removeUser()
  }

  return (
    <div>
      <button onClick={logOut}>Log Out</button>
      <section className={styles.header}>
        <a href={userState.actualUser.userData?.external_urls.spotify} target='_blank' className={styles.link}>
          <img className={styles.profileImg} src={userState.actualUser.image} alt="" />
        </a>
        <a href={userState.actualUser.userData?.external_urls.spotify} target='_blank' className={styles.link}>
          <h2 className={styles.title} >{userState.actualUser.name}</h2>
        </a>
      </section>
      <div>
        {
          tracksState.tracks.map((track, index) => (
            <div key={index}>
              <div>
                <img className={styles.artistImg} src={track.images[0].url} alt="" />
                <h3>{track.name}</h3>
                <h2>{track.popularity}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile