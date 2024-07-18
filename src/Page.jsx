import { useState } from 'react'
//import './App.css'
import { useRef } from 'react';  
import generatePDF from 'react-to-pdf'; 

import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Exprinece'
import Certification from './components/Certification'
import FormatDate from './components/FormatDate'


function Page({header,education,experience,certification}) {
  const targetRef = useRef();  

  return (
      <div>
      <div style={{textAlign:"center", padding: "10px 0px"}}><button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button></div>
       <div className='page' ref={targetRef}>
        
        <Header header={header}></Header>

        {education.length>0&&<h3>Education</h3>}

        {education.length>0&&education.map(item=><Education education={item} key={item.id}></Education>)}

        {experience.length>0&&<h3>Experience  and Projects</h3>}
        {experience.length>0&&experience.map(item=><Experience experience={item} key={item.id}></Experience>)}

        {certification.length>0&&<h3>Certification</h3>}
        {certification.length>0&&certification.map(item=><Certification certification={item} key={item.id}></Certification>)}        

     </div>
     
    </div>
  )
}

export default Page
