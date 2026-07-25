/*useFadeIn.ts*/
import { useEffect, useRef, useState } from 'react';

export function useFadeIn() {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return { ref, isVisible };
}


//hoook design
// design 2 [dom]  V/S  design  2  [react]   
//    state trigger  




/*
//the old hook, made by me
//useFadeIn.ts


import { useEffect, useRef } from 'react'

export function useFadeIn(visibleClass: string = 'visible') {

    // Ref can be attached to ANY HTML element
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        // Create observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('Entry intersecting:', entry.isIntersecting);
                if (entry.isIntersecting) {
                    // Add 'visible' CSS class when element appears
                    entry.target.classList.add(visibleClass)
                }
            },
            {
                threshold: 0.1,  // Trigger when 10% visible
                // Optional: rootMargin for earlier/later triggering
                // rootMargin: '0px 0px -50px 0px',
            }
        )

        // Start observing
        if (ref.current) {
            observer.observe(ref.current)
        }

        // Cleanup when component unmounts
        return () => {
            observer.disconnect()
        }
    }, []) // Empty dependency array = run once

        // Return the ref so component can attach it
    return ref
}





























//Categories.tsx

import { useEffect, useState } from "react";

//dataimports
import { getCategories } from "../../data/categories";
import type { Category } from "../../data/categories";

//ui & components &  CSS imports
import CategoryCard from './CategoryCard'
import UiLink from '../ui/UiLink/UiLink'
import styles from './Categories.module.css'

//custom hooks imports
import { useFadeIn } from '../../hooks/useFadeIn'


export default function Categories() {

    const ref = useFadeIn(styles.visible)

    const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {

    getCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));

  }, []);

    return (
        <section ref={ref} className={styles.container}>


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


*/

