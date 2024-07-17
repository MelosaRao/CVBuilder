export default function CertificationForm({handleCertification,setClicked}){

return(<form onSubmit={(e)=>{
    e.preventDefault()
    setClicked(false)
   handleCertification(e.target.elements)
}}>           
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required/>
            <label htmlFor="issued_by">Issued by: </label>
            <input type="text" id="issued_by" name="issued_by" required/>
            <label htmlFor="link">Link:</label>
            <input type="text" id="link" name="link"/>
            <div>
            <button>Submit</button>
            <button onClick={()=>(setClicked(false))}>Cancel</button>
            </div>

        </form>)}

