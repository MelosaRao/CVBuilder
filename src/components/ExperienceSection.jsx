import { useState } from "react"
import ExperienceForm from "./ExperienceForm"
import ExpDiv from "./ExpDiv"
import ExperienceEditForm from "./ExperienceEditForm.jsx"

export default function ExperienceSection({experience,handleExperience,deleteExperience, editExperience}){
    const[addExpClicked, setaddExpClicked] = useState(false)
    const[editClicked, setEditClicked] = useState(false)

    if(addExpClicked){        
        return(
            <div className="ExpSection">
            <h2>Experience and Projects</h2>
            <ExperienceForm handleExperience={handleExperience} setClicked={setaddExpClicked}></ExperienceForm>
            </div>    
        )
    }

    else if(editClicked){
        return(
        <div className="ExpSection">
            <h2>Experience and Projects</h2>
            <ExperienceEditForm handleExperience={editExperience} setClicked={setEditClicked} item={editClicked}></ExperienceEditForm>
    </div>)
    }

    else{
        return(
            <div className="ExpSection">
            <h2>Experience and Projects</h2>
            {experience.length>0&&experience.map(item=><ExpDiv item={item} deleteExperience={deleteExperience} setEditClicked={setEditClicked} key={item.id}></ExpDiv>)}
            <button onClick={()=>(setaddExpClicked(true))}>Add Experience</button>
            </div>
            
        )
    }
}
