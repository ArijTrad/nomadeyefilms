//Hero.tsx

//libraries, tools imports
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';




//docs, assets, imports LOCAL
import styles from './Hero.module.css'
import heroPreviewVideo from "../../assets/videos/herothumbnail/showreel_2025_240p.mp4"


export default function Hero() {

        const [isVideoOpen, setIsVideoOpen] = useState(false);
        const VIMEO_VIDEO_ID = "1084636349";
        const VIMEO_EMBED_URL = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1`;


    return (
        <>
        <section className={styles.hero}>
            <div className={styles.container}>
                
                {/* LEFT SIDE - TEXT */}
                <div className={styles.left}>
                    <h1 className={styles.bigText}>
                        We Create
                        <span className={styles.keyWord}>Cinematic</span>
                        <br />Stories That Connect
                    </h1>
                    
                    <p className={styles.smallText}>
                        Premium video production and advertising agency helping brands 
                        tell their story through powerful visuals. From concept to delivery, 
                        we bring your vision to life.
                    </p>
                    
                    <div className={styles.buttons}>
                        <button className={styles.ctaButton}>Start a Project →</button>
                        <button className={styles.ghostButton}>Watch Showreel</button>
                    </div>
                </div>
                
                {/* RIGHT SIDE - IMAGE/VIDEO */}
                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <video
                        className={styles.heroImage}
                        autoPlay
                        muted
                        loop
                        playsInline
                        // Optional: fallback image
                        // ############### fix the fallback image not working
                        //make if no video the fallback image displays
                        //poster="../../assets/images/hero_fallback.png"
                        >
                            <source src={heroPreviewVideo} type="video/mp4" />
                        </video>

                        <button 
                            className={styles.playButton}
                            onClick={() => {
                                setIsVideoOpen(true);
                                console.log("Play video clicked");
                            }}
                            aria-label="Play showreel video"
                            title="Play showreel video"
                        >
                            <svg 
                                width="120" 
                                height="120" 
                                viewBox="0 0 24 24" 
                                fill="none"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M8 5v14l11-7z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>



{/* ######### debug delete later#################### */}
            <div className={styles.container} >     
                <div >
                    <h1>section N</h1>
                </div>
                <div >
                    <h1>section N</h1>
                </div>
                <div >
                    <h1>section N</h1>
                </div>
                <div >
                    <h1>section N</h1>
                </div>
                
           </div>




        </section>








<Dialog.Root
    open={isVideoOpen}
    onOpenChange={setIsVideoOpen}
>
    <Dialog.Portal>

        <Dialog.Overlay className={styles.dialogOverlay} />

        <Dialog.Content className={styles.dialogContent}>

            <Dialog.Title className={styles.visuallyHidden}>
                Showreel Video
            </Dialog.Title>

            <iframe 
                className={styles.vimeoFrame}
                src={VIMEO_EMBED_URL}
                title="Nomad Eye Films Showreel"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />

            <Dialog.Close className={styles.dialogClose}>
                ✕
            </Dialog.Close>

        </Dialog.Content>

    </Dialog.Portal>
</Dialog.Root>












        </>
    )
}