export default function EducationForm({handleEducation,setClicked}){

return(<form onSubmit={(e)=>{
    e.preventDefault()
    setClicked(false)
   handleEducation(e.target.elements)
}}>           
            <label htmlFor="inst">Institution: </label>
            <input type="text" id="inst" name="inst" required/>
            <label htmlFor="degree">Degree/Qualification: </label>
            <input type="text" id="degree" name="degree" required/>
            <label htmlFor="from">Start Date: </label>
            <input type="date" id="from" name="from" required/>
            <label htmlFor="to">End Date: </label>
            <input type="date" id="to" name="to" required/>
            <div>
            <button>Submit</button>
            <button onClick={()=>(setClicked(false))}>Cancel</button>
            </div>

        </form>)}




