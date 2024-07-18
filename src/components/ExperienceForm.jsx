export default function ExperienceForm({handleExperience, setClicked}){
    return(<form onSubmit={(e)=>{
        e.preventDefault()
        setClicked(false)
        handleExperience(e.target.elements)
    }}>           
                <label htmlFor="organisation">Organisation: </label>
                <input type="text" id="organisation" name="organisation" required/>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" required/>
                <label htmlFor="from">Start Date: </label>
                <input type="date" id="from" name="from" required/>
                <label htmlFor="to">End Date: </label>
                <input type="date" id="to" name="to"/>
                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" required/>
                <label htmlFor="technolgies">Skills: </label>
                <textarea name="technolgies" id="technolgies"></textarea>
                <div>
                <button>Submit</button>
                <button onClick={()=>(setClicked(false))}>Cancel</button>
                </div>
            </form>)
        
        }
    


            