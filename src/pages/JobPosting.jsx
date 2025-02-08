import { useEffect, useState } from "react"
import Header from "../components/Header"
import { getJobDataUrl } from "../urls"
import useFetch from "../useFetch"
import { Link } from "react-router-dom"

const JobPosting=()=>{
    const [jobsData,setJobData]=useState([])
    const[searchTerm,setSearchterm]=useState("")
    const {data,loading,error}=useFetch(getJobDataUrl)
    useEffect(()=>{
        if(Array.isArray(data)){
            setJobData(data)
        }else setJobData([])
    },[data])
    const filteredData=jobsData?.filter(job=>{
const matchesSearchTerm=searchTerm===""||job.title.toLowerCase().includes(searchTerm.toLowerCase())
return matchesSearchTerm
    })
    const handleDelete=async (jobId) => {
        try {
            const response=await fetch(`${getJobDataUrl}jobs/${jobId}`,{
                method:'DELETE'
            })
            if (!response.ok) {
                throw "Failed to delete item "
            }
            const data = await response.json()
            if(data){
                setJobData(prev=>prev.filter(job=>job._id!=jobId))
            }
        } catch (error) {
            console.log(error)
        }
    }
    const displayData = filteredData.map((job) => (
        <div className="col-md-4 my-2" key={job._id}>
          <div className="card p-3">
            <h3>{job.title}</h3>
            <p><strong>Company Name:</strong> {job.companyName}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Job Type:</strong> {job.type}</p>
            <div>
            <Link className="btn btn-primary" to={`/viewjob/${job._id}`}>See Details</Link>
            <button className="btn btn-danger mx-3" onClick={()=>handleDelete(job._id)}>Delete</button>
            </div>
          </div>
        </div>
      ));
    return(<>
    <Header/>
    <main className="container">
      
<input type="text" placeholder="Search job by title..." onChange={e=>setSearchterm(e.target.value)} className="form-control my-3"/>
<h2> All Jobs</h2>
{loading && (<div className="d-flex align-items-center">
  <strong>Loading...</strong>
  <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>)}
{error && <p>{error}</p>}
<div className="row my-3">
{displayData}
</div>
    </main>
    </>)
}
export default JobPosting