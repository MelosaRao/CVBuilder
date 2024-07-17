export default function Certification({certification}){
    
    if(certification.link){
        return(
            <div className="certification">
                <div><a href={`${certification.link}`}><b>{certification.name}</b></a> issued  by {certification.issued_by}</div>
            </div>
        )
    }
    else{
    return(
        <div className="certification">
            <div><b>{certification.name}</b> issued  by {certification.issued_by}</div>
        </div>
    )}

}

