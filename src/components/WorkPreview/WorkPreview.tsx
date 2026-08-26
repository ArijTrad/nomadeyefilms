/* WorkPreview.tsx */

import { useEffect, useState } from "react";

// Data layer
import {
    getWorkPreviews,
    type WorkPreview as WorkPreviewType,
} from "../../data/workpreview";

// UI & components
import WorkPreviewCard from "./WorkPreviewCard";
import UiLink from "../ui/UiLink/UiLink";

// Styles
import styles from "./WorkPreview.module.css";

// Custom hook
import { useFadeIn } from "../../hooks/useFadeIn";


export default function WorkPreview() {

    const { ref, isVisible } = useFadeIn();

    // Work preview data
    const [works, setWorks] = useState<WorkPreviewType[]>([]);

    // Fetch works
    useEffect(() => {

        getWorkPreviews()
            .then((data) => setWorks(data))
            .catch((error) => console.error(error));

    }, []);


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

                {works.map((work, index) => (

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