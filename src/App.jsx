import Gallery from "./components/Gallery/Index"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import './styles/components/app.sass'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
