
export default function ExperienceEditForm({handleExperience, setClicked,item}){
    return(<form onSubmit={(e)=>{
        e.preventDefault()
        setClicked(false)
        handleExperience(item.id, e.target.elements)
    }}>           
                <label htmlFor="organisation">Organisation: </label>
                <input type="text" id="organisation" name="organisation" defaultValue={`${item.organisation}`}required/>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" defaultValue={`${item.title}`}required/>
                <label htmlFor="from">Start Date: </label>
                <input type="date" id="from" name="from" defaultValue={item.from}/>
                <label htmlFor="to">End Date: </label>
                <input type="date" id="to" name="to" defaultValue={item.to}/>
                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" defaultValue={`${item.description}`}/>
                <label htmlFor="technolgies">Skills: </label>
                <textarea name="technolgies" id="technolgies" defaultValue={item.technolgies?`${item.technolgies}`:""}></textarea>
                <div>
                <button>Submit</button>
                <button onClick={()=>(setClicked(false))}>Cancel</button>
                </div>
            </form>)
        
        }
    