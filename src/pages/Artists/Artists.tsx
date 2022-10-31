import { useEffect } from "react"
import { artistsStore, userStore } from "../../state"
import { getArtists } from "../../utilities"
import styles from './Artist.module.css'

function Artists() {
  const artistState = artistsStore()
  const userState = userStore();

  useEffect(() => {
    getArtists({ code: userState.actualUser.access_token, limit: 50, time: 'long_term' }).then((res) => artistState.addArtists(res.items))
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <h1>Top Artists</h1>
        <div className={styles.artistsList}>
      {
          artistState.artists?.map((artist, index) => (
            <div key={index} className={styles.artistItem} >
                <img className={styles.artistImg} src={artist.images[2].url} alt="" />
                <h4>{artist.name}</h4>
                <p>{artist.type}</p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Artists