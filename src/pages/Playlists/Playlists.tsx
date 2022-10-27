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

    getPlaylists({ code: userState.actualUser.access_token }).then((playlists) => playlistsState.addPlaylists(playlists.items))

  }, [])


  return (
    <div>
      <div className={styles.listContainer}>
        {
          playlistsState.playlists.map((playlist) => (
            <div key={playlist.id} onClick={() => navigate(`/playlists/${playlist.id}`)} className={styles.playlistItem}>
              <h1>{playlist.name}</h1>
              <h3>{playlist.owner.display_name}</h3>
              <img src={playlist.images[0]?.url} className={styles.imgPlaylist}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Playlists