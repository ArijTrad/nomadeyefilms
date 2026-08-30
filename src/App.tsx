//App.tsx

//libraries imports
import { useState } from 'react'


//styles imports
import styles from './App.module.css'

//components imports
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import WorkPreview from './components/WorkPreview/WorkPreview'
//import ProblemSolution from './components/ProblemSolution/ProblemSolution'
//import Process from './components/Process/Process'
//import Testimonials from './components/Testimonials/Testimonials'
//import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies'
//import Pricing from './components/Pricing/Pricing'
//import About from './components/About/About'
//import Contact from './components/Contact/Contact'
//import Footer from './components/Footer/Footer'



//UIs imports
import UiLiquidGlassFilter from './components/ui/UiLiquidGlass/UiLiquidGlassFilter';





export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<UiLiquidGlassFilter />

<div className={styles.pageLayout} >




<div className={`${styles.container} ${styles.stickyNavbarContainer}`}>
  <Navbar />
</div>



<div className={styles.container}>
  <Hero />
</div>




<div className={styles.container}>
  <Categories />
</div>



<div className={styles.container}>
  <WorkPreview />
</div>

<div className={styles.container}>
  <Categories />
</div>


{/*

<div className={styles.container}>
  <ProblemSolution />
</div>


<div className={styles.container}>
  <Process />
</div>


<div className={styles.container}>
  <Testimonials />
</div>


<div className={styles.container}>
  <TrustedCompanies />
</div>


<div className={styles.container}>
  <Pricing />
</div>


<div className={styles.container}>
  <About />
</div>


<div className={styles.container}>
  <Contact />
</div>


<div className={styles.container}>
  <Footer />
</div>

*/}

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
