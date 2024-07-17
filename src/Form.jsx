//import { useState } from 'react'
import EducationSection from "./components/EducationSection"
import ExperienceSection from './components/ExperienceSection'
import CertificationSection from "./components/CertificationSection"

export default function Form({handleHeader, handleEducation, handleExperience, 
    education, deleteEducation, editEducation, experience, deleteExperience, editExperience,
    certification, handleCertification, editCertification, deleteCertification}){
    const [eduaform, setEducform] = []
    return(
        <div className='Form' >

        <div className='personal'>
        <h2>Personal Details</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
           handleHeader(e.target.elements)
    }}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" required/>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName" required/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email"name="email"/>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type="tel" name="phoneNumber" id="phoneNumber"/>
            <label htmlFor="location">Location: </label>
            <input type="text" name="location" id="location"/>
            <button>Submit</button>
        </form>
        </div>
        <EducationSection handleEducation={handleEducation} education={education} deleteEducation={deleteEducation} editEducation={editEducation}></EducationSection>

        <ExperienceSection handleExperience={handleExperience} experience={experience} deleteExperience={deleteExperience} editExperience={editExperience}></ExperienceSection>

        <CertificationSection handleCertification={handleCertification} certification={certification} deleteCertification={deleteCertification} editCertification={editCertification}></CertificationSection>
        </div>
    )
}