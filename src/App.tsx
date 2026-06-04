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
      <Navbar />
      
      <div className={styles.hi_iam}>
        <h1>hi i am the app main page</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      {/* HERO SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#ff6b6b' }}>
        <div className={styles.componentLabel}>✨ THIS IS THE HERO COMPONENT ✨</div>
        <Hero />
      </div>

      {/* CATEGORIES SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#4ecdc4' }}>
        <div className={styles.componentLabel}>📁 THIS IS THE CATEGORIES COMPONENT 📁</div>
        <Categories />
      </div>

      {/* WORK PREVIEW SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#ffe66d' }}>
        <div className={styles.componentLabel}>🎬 THIS IS THE WORK PREVIEW COMPONENT 🎬</div>
        <WorkPreview />
      </div>

      {/* PROBLEM SOLUTION SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#ff6b6b' }}>
        <div className={styles.componentLabel}>💡 THIS IS THE PROBLEM SOLUTION COMPONENT 💡</div>
        <ProblemSolution />
      </div>

      {/* PROCESS SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#a8e6cf' }}>
        <div className={styles.componentLabel}>⚙️ THIS IS THE PROCESS COMPONENT ⚙️</div>
        <Process />
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#ffd93d' }}>
        <div className={styles.componentLabel}>⭐ THIS IS THE TESTIMONIALS COMPONENT ⭐</div>
        <Testimonials />
      </div>

      {/* TRUSTED COMPANIES SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#6c5ce7' }}>
        <div className={styles.componentLabel}>🏢 THIS IS THE TRUSTED COMPANIES COMPONENT 🏢</div>
        <TrustedCompanies />
      </div>

      {/* PRICING SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#00cec9' }}>
        <div className={styles.componentLabel}>💰 THIS IS THE PRICING COMPONENT 💰</div>
        <Pricing />
      </div>

      {/* ABOUT SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#fd79a8' }}>
        <div className={styles.componentLabel}>📖 THIS IS THE ABOUT COMPONENT 📖</div>
        <About />
      </div>

      {/* CONTACT SECTION */}
      <div className={styles.componentBox} style={{ borderColor: '#e17055' }}>
        <div className={styles.componentLabel}>📞 THIS IS THE CONTACT COMPONENT 📞</div>
        <Contact />
      </div>

      {/* FOOTER */}
      <div className={styles.componentBox} style={{ borderColor: '#636e72' }}>
        <div className={styles.componentLabel}>📍 THIS IS THE FOOTER COMPONENT 📍</div>
        <Footer />
      </div>
    </>
  )
}