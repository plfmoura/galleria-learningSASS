import Gallery from "./components/Gallery/Index"
import FooterPage from "./components/FooterPage/Index"
import './styles/components/app.sass'
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Gallery />
      <FooterPage />
    </div>
  )
}

export default App
