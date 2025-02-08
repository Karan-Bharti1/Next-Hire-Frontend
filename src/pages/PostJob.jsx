import Header from "../components/Header"
const PostJobForm=()=>{
return(<form>
<label className="my-2" htmlFor="title">Job Title:</label>
<input type="text" name="title" className="form-control" id="title" required/>
<label className="my-2" htmlFor="companyName">Company Name:</label>
<input id="companyName" type="text" name="companyName" className="form-control" required/>
<label className="my-2" htmlFor="location">Location:</label>
<input id="location" type="text" name="location" className="form-control" required/>
<label className="my-2" htmlFor="salary">Salary(per annum):</label>
<input id="salary" type="number" name="salary" className="form-control" required/>
<label className="my-2" htmlFor="type" >Job Type</label>
<select  className="form-control" required>
    <option value="">Select a type...</option>
<option value="Full-time (On-site)"> Full-time (On-site)</option>
    <option value="Part-time (On-site)">Part-time (On-site)</option>
   <option value=" Full-time (Remote)"> Full-time (Remote)</option>
   <option value="Part-time (Remote)">Part-time (Remote)</option>
</select>
<label className="my-2" htmlFor="description">Job Description:</label>
<input id="description" type="text" name="description" className="form-control" required/>
<label className="my-2" htmlFor="qualifications">Qualifications:</label>
<input id="qualifications" type="text" name="qualifications" className="form-control" required/>
<button className="btn btn-primary my-2">Add Post</button>
</form>)
}
const PostJob=()=>{

    return(<>
    <Header/>
    <main className="container">
        <h2 className="my-3">Post a Job</h2>
<PostJobForm/>
    </main>
    </>)
}
export default PostJob;