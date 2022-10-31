import { useEffect } from 'react'
import { Header } from '../../components';
import { userStore, artistsStore, tracksStore } from '../../state';
import { getArtists, getTracks, refreshToken } from '../../utilities'
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
      <button className={styles.logOutBtn} onClick={logOut}>Log Out</button>
      <Header />

      <div className={styles.main}>
        <TopArtistReview artists={artistState.artists} navigateUrl='/artists'/>
        <TopTracksReview tracks={tracksState.tracks} navigateUrl='/tracks'/>
      </div>
    </div>
  )
}

export default Profile