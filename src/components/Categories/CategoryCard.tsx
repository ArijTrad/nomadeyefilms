/* CategoriesCard.tsx */



import styles from './CategoryCard.module.css'

import type { Category } from '../../data/categories'


type CategoriesCardProps = {
    category: Category;
}


export default function CategoryCard({ category }: CategoriesCardProps) {

    return (
        <article className={styles.card}>

            <img
            className={styles.image}
            src={category.imageUrl}
            alt={category.name}
        />

        <h3 className={styles.title}>
            {category.name}
        </h3>

        </article>
    )
}


