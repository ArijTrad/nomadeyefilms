/* WorkPreviewCard.tsx */

import { useState } from "react";

import styles from "./WorkPreviewCard.module.css";

import type { WorkPreview } from "../../data/workpreview";

import VideoModal from "../ui/VideoModal/VideoModal";

type WorkPreviewCardProps = {
    work: WorkPreview;
};

export default function WorkPreviewCard({
    work
}: WorkPreviewCardProps) {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <article
                className={styles.card}
                onClick={() => {
                    if (work.vimeoId) {
                        setIsVideoOpen(true);
                    }
                }}
            >

                {/* VIDEO PREVIEW */}
                {work.previewVideoUrl ? (
                    <video
                        className={styles.image}
                        src={work.previewVideoUrl}
                        poster={work.thumbnailUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : work.thumbnailUrl ? (

                    /* THUMBNAIL FALLBACK */
                    <img
                        className={styles.image}
                        src={work.thumbnailUrl}
                        alt={work.title}
                    />

                ) : (

                    /* NO MEDIA */
                    <div className={styles.noMedia}>
                        No preview available
                    </div>

                )}

                <div className={styles.overlay}>

                    <p className={styles.description}>
                        {work.description}
                    </p>

                </div>

                <div className={styles.info}>

                    <p className={styles.category}>
                        {work.category}
                    </p>

                    <h3 className={styles.title}>
                        {work.title}
                    </h3>

                </div>

            </article>

            {/* FULL VIMEO VIDEO */}
            <VideoModal
                vimeoId={work.vimeoId}
                title={work.title}
                open={isVideoOpen}
                onOpenChange={setIsVideoOpen}
            />
        </>
    );
}