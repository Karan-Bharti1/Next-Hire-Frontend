import { useState } from "react"
import Header from "../components/Header"
import { getJobDataUrl } from "../urls";

const PostJob=()=>{
const [jobData,setJobData]=useState({
  title:""  ,
  companyName:"",
  location:"",
  salary:"",
  type:"",
  description:[],
  qualifications:[]
})
const [alert,setAlert]=useState({message:"",visible:false})
const handleChange = (event) => {
  const { name, value } = event.target;

  setJobData((prev) => {
    if (name === "description" || name === "qualifications") {
      return { ...prev, [name]: value ? value.split(",") : [] };
    } else {
      return {
        ...prev,
        [name]: name === "salary" && value ? parseFloat(value) : value,
      };
    }
  });
};
  
  const handleSubmit=async(event)=>{
    event.preventDefault();
  try {
    const response=await fetch(`${getJobDataUrl}jobs`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(jobData)
    })
    if(!response.ok){
      throw "Error while posting data"
    }
    const data=response.json()
    if(data){
     setJobData ({
        title:""  ,
        companyName:"",
        location:"",
        salary:"",
        type:"",
        description:[],
        qualifications:[]
      })
      setAlert({message:"Job Posted successfully",visible:true})
      setTimeout(()=>setAlert({message:"",visible:false}),1500)
    }
  } catch (error) {
    console.log(error)
  }

  }

    return(<>
    <Header/>
    <main className="container mb-3">
    {
        alert.visible && <span
                id="alert"
                className="top-10 end-0 text-white bg-primary position-fixed p-3 m-3">{alert.message}</span>
    }
        <h2 className="my-3">Post a Job</h2>
        <form onSubmit={handleSubmit}>
    <label className="my-2" htmlFor="title">Job Title:</label>
    <input  type="text"  name="title" className="form-control" id="title" value={jobData.title} onChange={handleChange}  required/>
    <label className="my-2" htmlFor="companyName">Company Name:</label>
    <input  id="companyName" value={jobData.companyName}  type="text" name="companyName" onChange={handleChange} className="form-control" required/>
    <label className="my-2" htmlFor="location">Location:</label>
    <input  id="location" type="text" value={jobData.location} name="location" onChange={handleChange} className="form-control" required/>
    <label  className="my-2" htmlFor="salary">Salary(per annum):</label>
    <input  id="salary" type="number" name="salary"value={jobData.salary} onChange={handleChange} className="form-control" required/>
    <label  className="my-2" htmlFor="type" >Job Type</label>
    <select value={jobData.type} name="type" id="type" onChange={handleChange} className="form-control" required>
        <option value="">Select a type...</option>
    <option value="Full-time (On-site)"> Full-time (On-site)</option>
        <option value="Part-time (On-site)">Part-time (On-site)</option>
       <option value="Full-time (Remote)"> Full-time (Remote)</option>
       <option value="Part-time (Remote)">Part-time (Remote)</option>
    </select>
    <label className="my-2" htmlFor="description">Job Description:</label>
    <input  id="description" type="text" name="description" className="form-control" value={jobData.description.join(",")} onChange={handleChange}  required/>
    <label className="my-2" htmlFor="qualifications">Qualifications:</label>
    <input id="qualifications" type="text" name="qualifications" className="form-control" value={jobData.qualifications.join(",")} onChange={handleChange}  required/>
    <button className="btn btn-primary my-2" type="submit">Add Post</button>
    </form>
    </main>
    </>)
}
export default PostJob;