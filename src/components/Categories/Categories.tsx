/* Categories.tsx */

import { useEffect, useState } from "react";

//dataimports
//categories.ts ===data layer=== separate ui from logic
import { getCategories } from "../../data/categories";
import type { Category } from "../../data/categories";

//ui & components &  CSS imports
import CategoryCard from './CategoryCard'
import UiLink from '../ui/UiLink/UiLink'

//styles
import styles from './Categories.module.css'

//custom hook imports
import { useFadeIn } from '../../hooks/useFadeIn'


export default function Categories() {

    const { ref, isVisible } = useFadeIn();

    //categories data
    const [categories, setCategories] = useState<Category[]>([]);

    // Fetch categories
  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

    return (
        <section ref={ref} className={`${styles.container}
            ${isVisible ? styles.visible : ''
            }`}>


                <h2 className={styles.title} >Create any video, with us</h2>

                <div className={styles.grid}>
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
               <div className={styles.linkcenterer}>
                <UiLink href="/" variant="nav">View More →</UiLink>
                </div>

        </section>
    )
}