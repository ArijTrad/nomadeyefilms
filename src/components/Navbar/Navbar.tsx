//Navbar.tsx

import * as Dialog from '@radix-ui/react-dialog'


import styles from './Navbar.module.css'
import UiLink from '../ui/UiLink/UiLink'
import UiButton from '../ui/UiButton/UiButton'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* LEFT */}
      <a href="/" className={styles.left}>
        <img className={styles.logoImage} src="/images/nomadeyefilmlogo.svg" alt="Nomad Eye Films" />
        <span className={styles.logoText}>NOMAD EYE FILMS</span>
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
        <UiButton variant="ghost">Get Started</UiButton>
      </div>


       {/*========================================================
       ===========Hamburger - Radix Dialog Trigger==============
       =======================================================*/}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button 
              className={styles.hamburger}
              aria-label="Open menu"
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            {/* Overlay */}
            <Dialog.Overlay className={styles.overlay} />

            {/* Sidebar */}
            <Dialog.Content className={styles.sidebar}>
              {/* Close button */}
              <Dialog.Close className={styles.closeButton}>
                ✕
              </Dialog.Close>

              {/* Sidebar Links */}
              <div className={styles.sidebarLinks}>
                <UiLink href="/" variant="nav">Home</UiLink>
                <UiLink href="#" variant="nav">Features</UiLink>
                <UiLink href="#" variant="nav">Pricing</UiLink>
                <UiLink href="#" variant="nav">About</UiLink>
                {/* No buttons in sidebar - only links */}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>



    </div>
  )
}