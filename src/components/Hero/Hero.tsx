//Hero.tsx

//libraries, tools imports
import { useState } from 'react';

//docs, assets, imports LOCAL
import styles from './Hero.module.css'
import UiButton from '../ui/UiButton/UiButton';
import heroPreviewVideo from "../../assets/videos/herothumbnail/showreel_2025_240p.mp4"
import VideoModal from '../ui/VideoModal/VideoModal';


export default function Hero() {

        const [isVideoOpen, setIsVideoOpen] = useState(false);
        const VIMEO_VIDEO_ID = "1084636349";


    return (
        <>

            <section className={styles.container}>
                
                {/* LEFT SIDE - TEXT */}
                <div className={styles.left}>

                    <p className={styles.heroLabel}>
                        VIDEO EDITING · VIDEOGRAPHY · FILMMAKING
                    </p>

                    <h1 className={styles.bigText}>
                        <span className={styles.keyWord}>Videos</span>  That
                        <br />
                        Move People
                        <br />
                        And Brands
                    </h1>

                    <p className={styles.smallText}>
                        gfh jhxb ukhsnxqk  uk h n xk thf jg vjg as ku hjhs kusx sxkhh b xjk s hm bbss jh
                    </p>
                    <div className={styles.buttonscontainer}>
                        <UiButton variant='primary'>CTA primary</UiButton>
                        <UiButton variant='ghost'>View Work →</UiButton>

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
                        // Optional: add fallback image
                        // ############### fix the fallback image not working
                        //make if no video the fallback image displays
                        //poster="../../assets/images/hero_fallback.png"
                        >
                            <source src={heroPreviewVideo} type="video/mp4" />
                        </video>

                        <button className={styles.playButton}
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
                
            </section>


<VideoModal
    vimeoId={VIMEO_VIDEO_ID}
    title="Nomad Eye Films Showreel"
    open={isVideoOpen}
    onOpenChange={setIsVideoOpen}
/>



        </>
    )
}