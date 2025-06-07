'use client'; 
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from '../ui/AnimatedBackground'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-dark-space text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}