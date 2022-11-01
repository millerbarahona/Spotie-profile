import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Artists } from '../../models'
import { userStore } from '../../state'
import { getArtist, getRelatedArtist } from '../../utilities'
import styles from './Artist.module.css'

function ArtistDetail() {
  const navigate = useNavigate()
  const userState = userStore()
  const { idArtist } = useParams()
  const [artist, setArtist] = useState<Artists | undefined>()

  useEffect(() => {
    getArtist({ id: idArtist!, code: userState.actualUser.access_token }).then((artist) => setArtist(artist))
    getRelatedArtist({ id: idArtist!, code: userState.actualUser.access_token })
  }, [])

  const handleClick = () => {
    navigate(-1)
  }

  const handleClickPro = () => {
    navigate('/profile')
  }

  console.log(artist)
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.navigate}> <span className={styles.click} onClick={handleClickPro}>Profile</span><span> / </span><span className={styles.click} onClick={handleClick}>Top Artist</span> <span> / {artist?.name}</span></h2>
        <img src={artist?.images[0].url} alt="" className={styles.artistPost} />
        <div>
          <h2>Followers: { artist?.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
          <h2>Popularity: {artist?.popularity}%</h2>
          <h2>
            <span>Genres: </span>
            {
              artist?.genres.map((genre, index) => (
                <span>
                  <span>{genre}</span>
                  {index === artist.genres.length - 1 ? <span>.</span> : <span>, </span>}
                </span>
              ))
            }
          </h2>
        </div>
        <div>
          <a href={artist?.external_urls.spotify} target='_blank'><button className={styles.btnSpo}>Listen on Spotify</button></a>
        </div>

      </div>

    </div>
  )
}

export default ArtistDetail