/* WorkPreview.tsx */

import WorkPreviewCard from "./WorkPreviewCard";
import UiLink from "../ui/UiLink/UiLink";

import styles from "./WorkPreview.module.css";

import { workPreview } from "../../data/workpreview";

import { useFadeIn } from "../../hooks/useFadeIn";

export default function WorkPreview() {

    const { ref, isVisible } = useFadeIn();

    return (
        <section
            ref={ref}
            className={`${styles.container} ${
                isVisible ? styles.visible : ""
            }`}
        >

            <h2 className={styles.title}>
                Featured Work
            </h2>


            <div className={styles.grid}>

                {workPreview.map((work, index) => (

                    <div
                        key={work.id}
                        className={
                            index < 2
                                ? styles.cardWide
                                : styles.cardTall
                        }
                    >

                        <WorkPreviewCard work={work} />

                    </div>

                ))}

            </div>


            <div className={styles.linkcenterer}>
                <UiLink href="/" variant="nav">
                    View More →
                </UiLink>
            </div>

        </section>
    );
}