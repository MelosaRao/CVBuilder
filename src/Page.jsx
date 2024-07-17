import { useState } from 'react'
//import './App.css'

import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Exprinece'
import Certification from './components/Certification'
import FormatDate from './components/FormatDate'


function Page({header,education,experience,certification}) {
  

  return (

       <div className='page'>
        
        <Header header={header}></Header>

        {education.length>0&&<h3>Education</h3>}

        {education.length>0&&education.map(item=><Education education={item} key={item.id}></Education>)}

        {experience.length>0&&<h3>Experience  and Projects</h3>}
        {experience.length>0&&experience.map(item=><Experience experience={item} key={item.id}></Experience>)}

        {certification.length>0&&<h3>Cerrification</h3>}
        {certification.length>0&&certification.map(item=><Certification certification={item} key={item.id}></Certification>)}        

     </div>

  )
}

export default Page
