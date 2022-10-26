import { useEffect } from "react";
import { tracksStore, userStore } from "../../state";
import { getTracks } from "../../utilities"
import styles from '../Artists/Artist.module.css'

function Tracks() {
  const userState = userStore()
  const tracksState = tracksStore()

  useEffect(() => {
    getTracks({code: userState.actualUser.access_token, limit: 50, time: 'medium_term'}).then((tracks) => tracksState.addTracks(tracks.items))
  }, [])
  return (
    <div>
      <div className={styles.container}>
        <h1>Top Tracks</h1>
        <div className={styles.listContainer}>
          {
            tracksState.tracks.map((track, index) => (
              <div key={index}>
                <img src={track.album.images[0].url} className={styles.imgPoster} />
                <p>{track.name} - {track.album.name}</p>
                <div style={{display: "flex", flexDirection: 'row', gap: 5}}>
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