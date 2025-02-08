import { Link } from "react-router-dom"

const Header=()=>{
    return(<>
    <header className="bg-primary py-3"><div className="container">  <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/" >💼Next Hire</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <Link className="nav-link text-white" to="/jobpost">Job Postings</Link>
            <Link className="nav-link text-white" to="/postjob">Post Job</Link>
          </ul>
        </div>
      </div>
    </nav>
    </div></header>
    </>)
}
export default Header