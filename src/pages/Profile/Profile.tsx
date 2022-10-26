import { useEffect } from 'react'
import { userStore, artistsStore, tracksStore } from '../../state';
import { getUserLocal, getArtists, checkRefresh, getTracks } from '../../utilities'
import styles from './Profile.module.css'

function Profile() {
  const userState = userStore();
  const artistState = artistsStore()
  const tracksState = tracksStore()
  const user = getUserLocal()

  useEffect(() => {
    checkRefresh().then((response) => {
      !response ? null : userState.setUser({ ...user, access_token: response.access_token, time: response.expires_in + Date.now() })
    })
    getArtists({ code: userState.actualUser.access_token, limit: 10, time: 'short_term' }).then((res) => artistState.addArtists(res.items))
    getTracks({code: userState.actualUser.access_token, limit: 5, time: 'short_term'}).then((tracks) => tracksState.addTracks(tracks.items))
  }, [])
  
  const logOut = () => {
    userState.removeUser()
  }

  return (
    <div>
      <button onClick={logOut}>Log Out</button>
      <section className={styles.header}>
        <a href={userState.actualUser.userData?.external_urls.spotify} target='_blank' className={styles.link}>
          <img className={styles.profileImg} src={userState.actualUser.image} alt="" />
        </a>
        <a href={userState.actualUser.userData?.external_urls.spotify} target='_blank' className={styles.link}>
          <h2 className={styles.title} >{userState.actualUser.name}</h2>
        </a>
      </section>
      <div>
        {
          artistState.artists?.map((artist, index) => (
            <div key={index}>
              <div>
                <img className={styles.artistImg} src={artist.images[0].url} alt="" />
                <h3>{artist.name}</h3>
                <h2>{artist.popularity}</h2>
              </div>
            </div>
          ))
        }
        {
          tracksState.tracks?.map((track, index) => (
            <div key={index}>
              <div>
                <img src={track.album.images[0].url} alt="" />
                <h3>{track.name}</h3>
                <h4>{track.duration_ms / 1000}</h4>
                <a href={track.preview_url} target='_blank'><button>Preview</button></a>
                <audio controls>
                  <source src={track.preview_url} type='audio/mp3'/>
                </audio>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile