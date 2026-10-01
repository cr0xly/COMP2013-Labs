import listings from './data/data'
import ResortContainer from './components/ResortContainer'
import './App.css'

function App() {
  
  return (
    <>
      <div id="advertisement">

        <div className="TitleBox">
          <h1>Resorts Lite</h1>      
        </div>

        <div className="InnerBox">
          <ResortContainer data={listings}/>
        </div>

      </div>
    </>
  )
}

export default App
