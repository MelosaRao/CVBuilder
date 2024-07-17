export default function Header({header}){

    return (

        <div className='header'>
         
         <div>{header.firstName} {header.lastName}</div>
 
         <p>
            <div>{header.phoneNumber}</div>
            <div>{header.email}</div>
            <div>{header.location}</div>
            </p>
 
      </div>
 
   )
}