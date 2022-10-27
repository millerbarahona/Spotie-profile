import { useEffect } from 'react'
import { userStore, artistsStore, tracksStore } from '../../state';
import { getArtists, getTracks } from '../../utilities'
import styles from './Profile.module.css'
import TopArtistReview from './TopArtistReview';
import TopTracksReview from './TopTracks';

function Profile() {
  const userState = userStore();
  const artistState = artistsStore()
  const tracksState = tracksStore()

  useEffect(() => {
    getArtists({code: userState.actualUser.access_token, limit: 10, time: 'long_term'}).then((res) => artistState.addArtists(res.items))
    getTracks({code: userState.actualUser.access_token, limit: 10, time: 'long_term'}).then((tracks) => tracksState.addTracks(tracks.items))
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

      <div className={styles.main}>
        <TopArtistReview artists={artistState.artists} navigateUrl='/artists'/>
        <TopTracksReview tracks={tracksState.tracks} navigateUrl='/tracks'/>
      </div>
    </div>
  )
}

export default Profile