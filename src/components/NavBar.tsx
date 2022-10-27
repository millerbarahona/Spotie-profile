import { userStore } from '../state'
import microIcon from '../assets/micro.svg'
import soundIcon from '../assets/note.svg'
import recentIcon from '../assets/recent.svg'
import playlistIcon from '../assets/playlist.svg'
import styles from './NavBar.module.css'
import { useNavigate } from 'react-router-dom'
import { privateRoutes } from '../router/routes'

function NavBar() {
  const userState = userStore()
  const navigate = useNavigate()

  return (
    <nav className={styles.container}>
      <div onClick={()=> {navigate('/profile')}} className={`${styles.navItem} ${styles.selected}`}>
        <img src={userState.actualUser.image} className={styles.Imgicon} alt="" />
        <p style={{ margin: 0, fontWeight: 700 }}>Home</p>
      </div>
      <NavBarItem icon={microIcon} label='Top Artists' route={privateRoutes.ARTISTS}/>
      <NavBarItem icon={soundIcon} label='Top Tracks' route={privateRoutes.TRACKS}/>
      <NavBarItem icon={recentIcon} label='Recent' route='/artists'/>
      <NavBarItem icon={playlistIcon} label='Playlists' route='/artists'/>
    </nav>
  )
}

interface NavBarItem {
  icon: string,
  label: string,
  route: string
}

function NavBarItem({ icon, label, route }: NavBarItem) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(route)
  }

  return (
    <div className={`${styles.navItem} ${styles.selected}`} onClick={handleClick}>
      <div>
        <img src={icon} className={styles.icon} />
        <p>{label}</p>
      </div>
    </div>
  )
}

export default NavBar