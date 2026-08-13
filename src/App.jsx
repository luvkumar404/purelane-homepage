import ScenesBackground from './components/ScenesBackground'
import Ticker from './components/Ticker'
import Header from './components/Header'
import ProgressRail from './components/ProgressRail'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Ingredients from './components/Ingredients'
import Pillars from './components/Pillars'
import Proof from './components/Proof'
import Combos from './components/Combos'
import Bundles from './components/Bundles'
import ProductGrid from './components/ProductGrid'
import FullRange from './components/FullRange'
import { WhyBundles, BundleCategories, TrustBar, Signup } from './components/TrustSections'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'
import { useScrollEffects } from './hooks/useScrollEffects'

function App() {
  const {
    scenesRef,
    headerRef,
    heroProdRef,
    activeScene,
    sceneDepth,
    headerUp,
    activeRail,
  } = useScrollEffects()

  return (
    <>
      <ScenesBackground
        scenesRef={scenesRef}
        sceneDepth={sceneDepth}
        activeScene={activeScene}
      />
      <Ticker />
      <Header headerRef={headerRef} headerUp={headerUp} />
      <ProgressRail activeRail={activeRail} />

      <main id="top">
        <Hero heroProdRef={heroProdRef} />
        <Reviews />
        <Ingredients />
        <Pillars />
        <Proof />
        <Combos />
        <Bundles />
        <ProductGrid />
        <FullRange />
        <WhyBundles />
        <BundleCategories />
        <TrustBar />
        <Signup />
      </main>

      <Footer />
      <StickyCta />
    </>
  )
}

export default App
