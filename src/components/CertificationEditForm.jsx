export default function CertificationEditForm({handleCertification,setClicked,item}){

    return(<form onSubmit={(e)=>{
        e.preventDefault()
        setClicked(false)
       handleCertification(item.id, e.target.elements)
    }}> 


            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" defaultValue={item.name} required/>
            <label htmlFor="issued_by">Issued by: </label>
            <input type="text" id="issued_by" name="issued_by" defaultValue={item.issued_by} required/>
            <label htmlFor="link">Link:</label>
            <input type="text" id="link" name="link" defaultValue={item.link?`${item.link}`:""}/> 
                <div>
                <button>Submit</button>
                <button onClick={()=>(setClicked(false))}>Cancel</button>
                </div>
            </form>)}