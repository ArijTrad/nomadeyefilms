import styles from './Navbar.module.css'
import UiLink from '../ui/UiLink/UiLink'
import UiButton from '../ui/UiButton/UiButton'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* LEFT */}
      <a href="/" className={styles.left}>
        <img className={styles.leftlogonavbar} src="/images/nomadeyefilmlogo.svg" alt="Nomad Eye Films" />
        <span className={styles.logo}>NOMAD EYE FILMS</span>
      </a>

      {/* CENTER */}
      <div className={styles.center}>
        <UiLink href="/" variant="nav">Home</UiLink>
        <UiLink href="#" variant="nav">Features</UiLink>
        <UiLink href="#" variant="nav">Pricing</UiLink>
        <UiLink href="#" variant="nav">About</UiLink>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <UiButton variant="primary">Get Started</UiButton>
      </div>
    </div>
  )
}