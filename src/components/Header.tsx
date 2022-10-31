import { userStore } from '../state';
import { getUser } from '../utilities';
import styles from './Header.module.css'

function Header() {
  const userState = userStore();

  return (
    <header className={styles.header}>
      <div className={styles.flex}>
          <img className={styles.profileImg} src={userState.actualUser.image} alt="" />
        <div className={styles.header_name}>
          <p>PROFILE</p>
          <br />
          <a href={userState.actualUser.userData?.external_urls.spotify} target='_blank' className={styles.link}>
            <h1 className={styles.title} >{userState.actualUser.name}</h1>
          </a>
          <p>{userState.actualUser.userData?.followers.total} Followers • 12 Playlists</p>
        </div>

      </div>

    </header>
  )
}

export default Header