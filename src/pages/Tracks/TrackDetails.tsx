import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Track } from "../../models"
import { userStore } from "../../state"
import { getTrack } from "../../utilities"
import { Helmet } from "react-helmet"
import styles from './Tracks.module.css'


function TrackDetails() {
  const navigate = useNavigate()
  const userState = userStore()
  const { idTrack } = useParams()
  const [track, setTrack] = useState<Track | undefined>()

  useEffect(() => {
    getTrack({ id: idTrack!, code: userState.actualUser.access_token }).then((track) => setTrack(track))
  }, [])

  const handleClick = () => {
    navigate(-1)
  }

  const handleClickPro = () => {
    navigate('/profile')
  }

  return (
    <div>
      <Helmet>
        {
          track ?
            <title>{track?.name} - {track?.artists[0].name}</title>
            :
            <title>Spotify Profile</title>
        }
      </Helmet>
      <div className={styles.container}>

        <h2 className={styles.navigate}> <span className={styles.click} onClick={handleClickPro}>Profile</span><span> / </span><span className={styles.click} onClick={handleClick}>Top Tracks</span> <span> / {track?.name} - {track?.artists[0].name}</span></h2>
        <h1>{track?.name} - {track?.artists[0].name}</h1>
        <h3>{track?.album.name}</h3>
        <img src={track?.album.images[1].url} alt="" />
        <div>
          {
            track ? (
              <audio controls>
                <source src={track?.preview_url} type='audio/mp3' />
              </audio>
            ) : null
          }
        </div>
        <a href={track?.external_urls.spotify} target='_blanck'><button >Play on Spotify</button></a>

      </div>
    </div>
  )
}

export default TrackDetails