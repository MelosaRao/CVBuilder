import CertDiv from "./CertDiv"
import { useState } from "react"
import CertificationForm from "./CertificationForm"
import CertificationEditForm from "./CertificationEditForm"
export default function CertificationSection({certification,handleCertification, editCertification,deleteCertification}){
    const[addCertClicked, setaddCertClicked] = useState(false)
    const[editClicked, setEditClicked] = useState(false)

    if(addCertClicked){        
        return(
            <div className="CertSection">
            <h2>Certification</h2>
            <CertificationForm handleCertification={handleCertification} setClicked={setaddCertClicked}></CertificationForm>
            </div>    
        )
    }

    else if(editClicked){
        return(
        <div className="CertSection">
            <h2>Certification</h2>
            <CertificationEditForm handleCertification={editCertification} setClicked={setEditClicked} item={editClicked}></CertificationEditForm>
    </div>)
    }

    else{
        return(
            <div className="CertSection">
            <h2>Certification</h2>
            {certification.length>0&&certification.map(item=><CertDiv item={item} deleteCertification={deleteCertification} setEditClicked={setEditClicked} key={item.id}></CertDiv>)}
            <button onClick={()=>(setaddCertClicked(true))}>Add Certification</button>
            </div>
            
        )
    }    

}