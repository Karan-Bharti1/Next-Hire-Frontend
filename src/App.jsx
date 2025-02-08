import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import { introImgUrl } from "./urls"
import { Link } from "react-router-dom"

function App() {
  

  return (
    <>
    <Header/>
      <main className="container">
        <img id="home-img" className="img-fluid my-3" src={introImgUrl}/>
        <section className="text-center my-3 p-2 bg-light">
        <h2>Explore us</h2>
        <h3 className="pt-3">Take a look at our Job Postings....</h3>
        <Link className="btn btn-primary" to="/jobpost">Job Postings</Link>
        <h3 className="pt-3">You can even add any job posting with us...</h3>
        <Link to="/postjob"className="btn btn-primary mb-4" >Post Job</Link>
        </section>
       
      </main>
    </>
  )
}

export default App
