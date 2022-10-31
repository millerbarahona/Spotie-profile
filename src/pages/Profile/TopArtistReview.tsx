import { useNavigate } from 'react-router-dom'
import { Artists } from '../../models'
import styles from './Profile.module.css'

interface Props {
  artists: Artists[],
  navigateUrl: string
}

function TopArtistReview({artists, navigateUrl}: Props) {
 const navigate = useNavigate()

  return (
    <div>
      <div  className={styles.head}>
        <h2>Top Artists of All Time</h2>
        <button onClick={ () => {navigate(navigateUrl)}}>See More</button>
      </div>
      <div className={styles.artistsList}>
      {
          artists?.map((artist, index) => (
            <div key={index} className={styles.artistItem} >
                <img className={styles.artistImg} src={artist.images[2].url} alt="" />
                <h4>{artist.name}</h4>
                <p>{artist.type}</p>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default TopArtistReview