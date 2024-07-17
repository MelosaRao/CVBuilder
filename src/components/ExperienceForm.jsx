export default function ExperienceForm({handleExperience, setClicked}){
    return(<form onSubmit={(e)=>{
        e.preventDefault()
        setClicked(false)
        handleExperience(e.target.elements)
    }}>           
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" required/>
                <label htmlFor="postion">Position: </label>
                <input type="text" id="position" name="position" required/>
                <label htmlFor="from">Start Date: </label>
                <input type="date" id="from" name="from" required/>
                <label htmlFor="to">End Date: </label>
                <input type="date" id="to" name="to"/>
                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" required/>
                <label htmlFor="skills">Technologies</label>
                <textarea name="technolgies" id="skills"></textarea>
                <div>
                <button>Submit</button>
                <button onClick={()=>(setClicked(false))}>Cancel</button>
                </div>
            </form>)
        
        }
    


            