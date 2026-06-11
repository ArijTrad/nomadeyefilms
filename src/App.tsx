//App.tsx
import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import WorkPreview from './components/WorkPreview/WorkPreview'
import ProblemSolution from './components/ProblemSolution/ProblemSolution'
import Process from './components/Process/Process'
import Testimonials from './components/Testimonials/Testimonials'
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies'
import Pricing from './components/Pricing/Pricing'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className={styles.mainwrapperinapp}
>

      <Navbar />
      

{/* HERO SECTION */}
<div className={styles.componentBox}>
  <Hero />
</div>

{/* CATEGORIES SECTION */}
<div className={styles.componentBox}>
  <Categories />
</div>

{/* WORK PREVIEW SECTION */}
<div className={styles.componentBox}>
  <WorkPreview />
</div>

{/* PROBLEM SOLUTION SECTION */}
<div className={styles.componentBox}>
  <ProblemSolution />
</div>

{/* PROCESS SECTION */}
<div className={styles.componentBox}>
  <Process />
</div>

{/* TESTIMONIALS SECTION */}
<div className={styles.componentBox}>
  <Testimonials />
</div>

{/* TRUSTED COMPANIES SECTION */}
<div className={styles.componentBox}>
  <TrustedCompanies />
</div>

{/* PRICING SECTION */}
<div className={styles.componentBox}>
  <Pricing />
</div>

{/* ABOUT SECTION */}
<div className={styles.componentBox}>
  <About />
</div>

{/* CONTACT SECTION */}
<div className={styles.componentBox}>
  <Contact />
</div>

{/* FOOTER */}
<div className={styles.componentBox}>
  <Footer />
</div>



            <div className={styles.hi_iam}>
        <h1>hi i am the app main page</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
</div>
    </>
  )
}