
import './App.css'
import Head from './components/head.jsx'
import Summary from "./components/summary.jsx"
import Skills from "./components/skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/education.jsx";
function App() {

  return (
    <>
        <div className='cv'>
      <Head/>
      <Summary/>
        <Skills/>
        <Experience/>
        <Education/>
        </div>

    </>
  )
}

export default App
