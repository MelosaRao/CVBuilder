export default function EducationEditForm({handleEducation,setClicked,item}){

    return(<form onSubmit={(e)=>{
        e.preventDefault()
        setClicked(false)
       handleEducation(item.id, e.target.elements)
    }}>           
                <label htmlFor="inst">Institution: </label>
                <input type="text" id="inst" name="inst" defaultValue={`${item.inst}`}required/>
                <label htmlFor="degree">Degree/Qualification: </label>
                <input type="text" id="degree" name="degree" defaultValue={`${item.degree}`} required/>
                <label htmlFor="from">Start Date: </label>
                <input type="date" id="from" name="from" defaultValue={item.from} required/>
                <label htmlFor="to">End Date: </label>
                <input type="date" id="to" name="to" defaultValue={item.to} required/>
                <div>
                <button>Submit</button>
                <button onClick={()=>(setClicked(false))}>Cancel</button>
                </div>
            </form>)}