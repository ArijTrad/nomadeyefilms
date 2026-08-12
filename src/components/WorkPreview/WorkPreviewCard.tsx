import styles from "./WorkPreviewCard.module.css";

import type { WorkPreview } from "../../data/workpreview";

type WorkPreviewCardProps = {
  work: WorkPreview;
};

export default function WorkPreviewCard({ work }: WorkPreviewCardProps) {
  return (
    <article className={styles.card}>

      <img
        className={styles.image}
        src={work.imagepath}
        alt={work.title}
      />

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
  );
}