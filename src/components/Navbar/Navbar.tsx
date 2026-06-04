import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      
      {/* LEFT */}
      <div className={styles.left}>
        <img className={styles.leftlogonavbar} src="/images/nomadeyefilmlogo.svg" alt="Nomad Eye Films" />
        <span className={styles.logo}>NOMAD EYE FILMS</span>
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <button className={styles.btn}>Get Started</button>
      </div>

    </div>
  )
}