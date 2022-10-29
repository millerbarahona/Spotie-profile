import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Playlist } from '../../models'
import { userStore } from '../../state'
import styles from './Playlist.module.css'
import { getPlaylist } from '../../utilities'
import {Helmet} from 'react-helmet'

function PlaylistDetail() {
  const userState = userStore()
  const navigate = useNavigate()
  const { idPlaylist } = useParams()
  const [playlist, setPlaylist] = useState<Playlist | undefined>()

  useEffect(() => {

    getPlaylist({ code: userState.actualUser.access_token, id: idPlaylist }).then((playlist) => setPlaylist(playlist))

  }, [])

  console.log(playlist?.tracks.items[0]?.track.name)


  return (
    <div className={styles.container}>
      <Helmet>
        {
          playlist ? <title>{playlist?.name} By {playlist?.owner.display_name}</title> : <title>Spotify Profile</title>
        }
      </Helmet>

      <div className={styles.header}>
        <h1>{playlist?.name}</h1>
        <img src={playlist?.images[0].url} alt="" />
        <a href={playlist?.external_urls.spotify} target="_blanck"><button>Hola</button></a>
        <h3>By {playlist?.owner.display_name}</h3>
      </div>

      <div>
        {
          playlist?.tracks.items.map((track) => (
            <div key={track.track.id} className={styles.trackItem} onClick={() => navigate(`/tracks/${track.track.id}`)}>
              <img src={track.track.album.images[0].url} style={{ width: 100, height: 100 }}  />
              <div>
                <h2>{track.track.name}</h2>
                <h3>{track.track.artists[0].name}</h3>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PlaylistDetail