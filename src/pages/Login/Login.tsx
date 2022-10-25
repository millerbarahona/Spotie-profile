import { useNavigate } from 'react-router-dom'
import imgUrl from '../../assets/spotify-2.svg'
import styles from './LoginStyles.module.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/auth')
  }

  return (
    <div className={styles.container}>
      <div>
        <img src={imgUrl} alt="" className={styles.logo} />
        <h1 className={styles.title}>Spotify Profile</h1>
        <button className={styles.login_button} onClick={handleLogin}>LOG IN TO SPOTIFY</button>
      </div>
    </div>
  )
}

export default Login