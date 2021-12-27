import './App.css'
import './css/bootstrap.min.css'
import './css/materialdesignicons.min.css'
// import './css/line.css'
import './css/tobii.min.css'
import './css/tiny-slider.css'
import './css/animate.css'
import './css/animations-delay.css'
import './css/style.min.css'
import './css/colors/default.css'
import Home from './components/Home'
import Loader from './components/Loader'

function App() {
  return (
    <div className="App">
      <Loader isLoading={false} />
      <Home />
    </div>
  )
}

export default App
