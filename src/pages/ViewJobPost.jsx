import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import { getJobDataUrl } from "../urls"

const ViewJobPost=()=>{
    const{ id}=useParams()
const {data,loading,error}=useFetch(`${getJobDataUrl}jobs/${id}`)
const DisplayData=()=>(<>
<h1 className="my-4">{data?.title}</h1>
<div className="card p-3">
    <p><strong>Company Name: </strong>{data?.companyName}</p>
    <p><strong>Location: </strong>{data?.location}</p>
    <p><strong>Salary: </strong> ₹{data?.salary}/- (per annum)</p>
    <p><strong>Job Type: </strong>{data?.type}</p>
   <p><strong>Description: </strong>{data?.description.join(", ")}</p>
   <p><strong>Qualifications: </strong></p>
   <ol>
    {data?.qualifications.map((q,i)=><li key={i}>{q}</li>)}
   </ol>
</div>
</>)
    return(<>
    <Header/>
    <main className="container">
    {loading && (<div className="d-flex align-items-center my-3">
  <strong>Loading...</strong>
  <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>)}
{error && <p>{error}</p>}
{!loading && <DisplayData/>}
    </main>
    </>)
}
export default ViewJobPost