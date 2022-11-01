import { useNavigate } from "react-router-dom"
import { Track } from "../../models"
import styles from './Profile.module.css'

interface Props {
  tracks: Track[],
  navigateUrl: string
}

export default function TopTracksReview({ tracks, navigateUrl }: Props) {
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.head}>
        <h2>Top Tracks All Time</h2>
        <button onClick={() => { navigate(navigateUrl) }}>See More</button>
      </div>
      {
        tracks.map((track, index) => (
          <div key={index} className={styles.trackItem} onClick={ () => {navigate(`/tracks/${track.id}`)}}>
            <span>{index + 1}</span>
            <img src={track.album.images[2].url} alt="" />
            <div>
              <h3>{track.name}</h3>
              <h4>{track.artists[0].name} . {track.album.name}</h4>
            </div>
          </div>
        ))
      }
    </div>
  )
}
