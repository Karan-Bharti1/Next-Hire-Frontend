import { Link, NavLink } from "react-router-dom"

const Header=()=>{
    return(<>
    <header className="bg-primary py-3"><div className="container">  <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-white fw-bold" to="/" >💼Next Hire</NavLink >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <NavLink  className="nav-link text-white" to="/jobpost">Job Postings</NavLink >
            <NavLink  className="nav-link text-white" to="/postjob">Post Job</NavLink >
          </ul>
        </div>
      </div>
    </nav>
    </div></header>
    </>)
}
export default Header