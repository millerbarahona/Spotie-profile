import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tracksStore, userStore } from "../../state";
import { checkRefresh, getTracks, getUserLocal, msToSg } from "../../utilities"
import styles from './Tracks.module.css'

function Tracks() {
  const userState = userStore()
  const tracksState = tracksStore()
  const user = getUserLocal()
  const navigate = useNavigate()

  useEffect(() => {
    checkRefresh().then((response) => {
      !response ? null : userState.setUser({ ...user, access_token: response.access_token, time: response.expires_in + Date.now() })
    })

    getTracks({ code: userState.actualUser.access_token, limit: 50, time: 'long_term' }).then((tracks) => tracksState.addTracks(tracks.items))
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <h1>Top Tracks</h1>
        <div className={styles.listContainer}>
          {
            tracksState.tracks.map((track, index) => (
              <div key={index} className={styles.trackItem} onClick={() => { navigate(`/tracks/${track.id}`) }}>
                <p>{index + 1}</p>
                <div className={styles.trackName}>
                  <img src={track.album.images[2].url} alt="" />
                  <div>
                    <h3>{track.name}</h3>
                    <h4>{track.artists[0].name}</h4>
                  </div>
                </div>
                <div className={styles.trackAlbum}>
                  <p>{track.album.name}</p>
                </div>
                <div className={styles.trackAlbum}>
                  {msToSg(track.duration_ms)}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tracks