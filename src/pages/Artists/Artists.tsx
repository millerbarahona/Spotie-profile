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
        <div className={styles.listContainer}>
          {
            artistState.artists.map((artist, index) => (
              <div key={index}>
                <img src={artist.images[0].url} className={styles.imgPoster} />
                <p>{artist.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Artists