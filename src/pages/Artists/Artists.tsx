import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { artistsStore, userStore } from "../../state"
import { getArtists } from "../../utilities"
import styles from './Artist.module.css'

function Artists() {
  const artistState = artistsStore()
  const userState = userStore();
  const navigate = useNavigate()

  useEffect(() => {
    getArtists({ code: userState.actualUser.access_token, limit: 50, time: 'long_term' }).then((res) => artistState.addArtists(res.items))
  }, [])

  const handleClick = () => {
    navigate(-1)
  }
  

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.navigate}> <span className={styles.click} onClick={handleClick}>Profile</span><span> / Top Artists</span></h2>
        <div className={styles.artistsList}>
      {
          artistState.artists?.map((artist, index) => (
            <div key={index} className={styles.artistItem} onClick={() => navigate(`/artists/${artist.id}`)}>
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