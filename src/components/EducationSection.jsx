import { useState } from "react"
import EducationForm from "./EducationForm"
import EduDiv from "./EducationDiv"
import EducationEditForm from "./EduvationEditForm"

export default function EducationSection({education,handleEducation,deleteEducation, editEducation}){
    const[addEduClicked, setaddEduClicked] = useState(false)
    const[editClicked, setEditClicked] = useState(false)

    if(addEduClicked){        
        return(
            <div className="EduSection">
            <h2>Education</h2>
            <EducationForm handleEducation={handleEducation} setClicked={setaddEduClicked}></EducationForm>
            </div>    
        )
    }

    else if(editClicked){
        return(
        <div className="EduSection">
            <h2>Education</h2>
            <EducationEditForm handleEducation={editEducation} setClicked={setEditClicked} item={editClicked}></EducationEditForm>
    </div>)
    }

    else{
        return(
            <div className="EduSection">
            <h2>Education</h2>
            {education.length>0&&education.map(item=><EduDiv item={item} deleteEducation={deleteEducation} setEditClicked={setEditClicked} key={item.id}></EduDiv>)}
            <button onClick={()=>(setaddEduClicked(true))}>Add Education</button>
            </div>
            
        )
    }
}



