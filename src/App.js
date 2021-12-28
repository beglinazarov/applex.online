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
import Dashboard from './components/dash/Dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom'

import Loader from './components/Loader'

function App() {
  return (
    <div className="App">
      {/* <Loader isLoading={false} /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
