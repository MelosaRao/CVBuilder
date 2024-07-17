
import FormatDate from './FormatDate'
export default function Education({education}){
    return(
        <div className="education">
        
        <div>
            <div><b>{education.inst}</b></div>
            <div>{FormatDate(education.from)} - {FormatDate(education.to)}</div>
        </div>

        <div>{education.degree}</div>
        
        </div>
        
    )
}