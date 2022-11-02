import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { playlistsStore, userStore } from "../../state"
import { getPlaylists } from "../../utilities"
import styles from './Playlist.module.css'

function Playlists() {
  const userState = userStore()
  const navigate = useNavigate()
  const playlistsState = playlistsStore()

  useEffect(() => {

    getPlaylists({ code: userState.actualUser.access_token , limit: 20}).then((playlists) => playlistsState.addPlaylists(playlists.items))

  }, [])


  return (
    <div>
      <div className={styles.head}>
        <h2>Playlists</h2>
        <button onClick={() => navigate('/playlists')}>See More</button>
      </div>
      <div className={styles.listContainer}>
        {
          playlistsState.playlists.map((playlist) => (
            <div key={playlist.id} onClick={() => navigate(`/playlists/${playlist.id}`)} className={styles.playlistItem}>
              <img src={playlist.images[0]?.url} className={styles.imgPlaylist}/>
              <h3>{playlist.name}</h3>
              <h4>{playlist.owner.display_name}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Playlists