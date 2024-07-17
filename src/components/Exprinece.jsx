import FormatDate from "./FormatDate"
export default function Experience({experience}){
    
    return(
        <div className="experience">
        
        <div>
            <div><b>{experience.organisation} {"-"} {experience.title}</b></div>
            <div>{FormatDate(experience.from)} - {FormatDate(experience.to)}</div>
        </div>
        <div>{experience.description}</div>
        {experience.technolgies&&(<div>Skills: {experience.technolgies} </div>)}
        </div>
        
    )}