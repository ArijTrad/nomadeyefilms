/* VideoModal.tsx */

import * as Dialog from "@radix-ui/react-dialog";

import styles from "./VideoModal.module.css";

type VideoModalProps = {
    vimeoId?: string;
    title: string;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function VideoModal({
    vimeoId,
    title,
    open,
    onOpenChange,
}: VideoModalProps) {

    if (!vimeoId) return null;

    const vimeoEmbedUrl =
        `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;

    return (
        <Dialog.Root
            open={open}
            onOpenChange={onOpenChange}
        >
            <Dialog.Portal>

                <Dialog.Overlay className={styles.dialogOverlay} />

                <Dialog.Content className={styles.dialogContent}>

                    <Dialog.Title className={styles.visuallyHidden}>
                        {title}
                    </Dialog.Title>

                    <iframe
                        className={styles.vimeoFrame}
                        src={vimeoEmbedUrl}
                        title={title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    />

                    <Dialog.Close
                        className={styles.dialogClose}
                        aria-label="Close video"
                    >
                        ✕
                    </Dialog.Close>

                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    );
}