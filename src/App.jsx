import { useState } from 'react'
//import './App.css'
import './newApp.css'
import Form from './Form'
import Page from './Page'
import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MutiPage';


function App() {
  const [header, setHeader] = useState({firstName:"John", lastName:"Doe" , email:"example@email.com", 
  phoneNumber: "+1 123456789", location:"City, Country"})


  const[education, setEducation] = useState([{
    inst: "New York University",
    degree: "Bachlors in Computer Science",
    from: "2015-01-08",
    to: "2018-01-08",
    id: 1
  },
  {
    inst: "Stanford University",
    degree: "Masters in Computer Science and Math",
    from: "2018-01-08",
    to: "2019-01-08",
    id: 2
  },
])

const[experience, setExperience]=useState([{
  organisation: "Amazon",
  title: "Software Engineer",
  from: "2019-01-08",
  to: "2023-01-08",
  description: " Mauris id nulla in elit sodales mattis condimentum sit amet risus. Aenean facilisis ex vitae ipsum bibendum consequat. Cras sit amet maximus ipsum, at fringilla augue. Praesent id nisl egestas, accumsan nibh at, feugiat velit. Pellentesque metus eros, porttitor id aliquam a, pellentesque et neque.",
  id: 1
},

{
  organisation: "Google",
  title: "Software Engineer",
  from: "2023-01-08",
  to: "2024-01-08",
  description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla eleifend tellus, ac hendrerit augue aliquam sed. Cras ipsum massa, luctus non sapien eget, faucibus placerat sapien. Mauris id nulla in elit sodales mattis condimentum sit amet risus. Aenean facilisis ex vitae ipsum bibendum consequat. ",
  technolgies: "HTML, CSS, Javascript, React",
  id: 2
}

])

const [certification, setCertification] = useState([
  {
  name: 'PCPP1 Certified Professional Python Programmer Level 1 ',
  issued_by: 'Python Institute',
  link: 'https://www.credly.com/badges/31fdaa70-f06b-474e-b4c2-2820beb1b442/public_url',
  id: 1
},

{
  name: 'PCPP2 Certified Professional Python Programmer Level 2 ',
  issued_by: 'Python Institute',
  link: '',
  id: 2
},

])


function clearData(){
  setEducation([])
  setExperience([])
  setCertification([])
}

function loadTemplate(){
  setEducation([{
    inst: "New York University",
    degree: "Bachlors in Computer Science",
    from: "2015-01-08",
    to: "2018-01-08",
    id: 1
  },
  {
    inst: "Stanford University",
    degree: "Masters in Computer Science and Math",
    from: "2018-01-08",
    to: "2019-01-08",
    id: 2
  },
])

  setExperience([{
    organisation: "Amazon",
    title: "Software Engineer",
    from: "2019-01-08",
    to: "2023-01-08",
    description: "Mauris id nulla in elit sodales mattis condimentum sit amet risus. Aenean facilisis ex vitae ipsum bibendum consequat. Cras sit amet maximus ipsum, at fringilla augue. Praesent id nisl egestas, accumsan nibh at, feugiat velit. Pellentesque metus eros, porttitor id aliquam a, pellentesque et neque.",
    id: 1
  },
  
  {
    organisation: "Google",
    title: "Software Engineer",
    from: "2023-01-08",
    to: "2024-01-08",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla eleifend tellus, ac hendrerit augue aliquam sed. Cras ipsum massa, luctus non sapien eget, faucibus placerat sapien. Mauris id nulla in elit sodales mattis condimentum sit amet risus. Aenean facilisis ex vitae ipsum bibendum consequat. ",
    technolgies: "HTML, CSS, Javascript, React",
    id: 2
  }
  
  ])

  setCertification([
    {
    name: 'PCPP1 Certified Professional Python Programmer Level 1 ',
    issued_by: 'Python Institute',
    link: 'https://www.credly.com/badges/31fdaa70-f06b-474e-b4c2-2820beb1b442/public_url',
    id: 1
  },
  
  {
    name: 'PCPP2 Certified Professional Python Programmer Level 2 ',
    issued_by: 'Python Institute',
    link: '',
    id: 2
  },
  
  ])
}


  function handleHeader(props){
    setHeader({
      firstName: props.firstName.value,
      lastName: props.lastName.value,
      email: props.email.value,
      phoneNumber: props.phoneNumber.value,
      location: props.location.value
    })
  }

  function handleEducation(props){
    setEducation(

      [...education, {inst: props.inst.value,
      degree: props.degree.value,
      from: props.from.value,
      to: props.to.value,
      id: uuidv4()
    }
    ]
    )
  }

  function editEducation(itemid, elements){
    setEducation(education.map(item=>{
      if(item.id==itemid){
        return {
          inst: elements.inst.value,
          degree: elements.degree.value,
          to: elements.to.value,
          from: elements.from.value,
          id: itemid
        }

      }

      else{
        return item
      }
  
    }))
  }
  function deleteEducation(item){
    setEducation(education.filter(edu=>edu.id!=item.id))
  }


  function handleExperience(props){
    setExperience(

      [...experience, {organisation: props.organisation.value,
      title: props.title.value,
      from: props.from.value,
      to:props.to.value,
      description: props.description.value,
      technolgies: props.technolgies.value,
      id: uuidv4()
    }
    ]
    )
  }

  function deleteExperience(item){
    setExperience(experience.filter(exp=>exp.id!=item.id))
  }


  function editExperience(itemid, elements){
    setExperience(experience.map(item=>{
      if(item.id==itemid){
        return {
          organisation: elements.organisation.value,
          title: elements.title.value,
          to: elements.to.value,
          from: elements.from.value,
          description: elements.description.value,
          technolgies: elements.technolgies.value,
          id: itemid
        }

      }

      else{
        return item
      }
  
    }))
  }


  function handleCertification(props){
    setCertification([...certification,
      {
        name: props.name.value,
        issued_by: props.issued_by.value,
        link: props.link.value,
        id: uuidv4()
      }]
    )
  }

  function deleteCertification(item){
    setCertification(certification.filter(cert=>cert.id!=item.id))
  }

  function editCertification(itemid, elements){
    setCertification(certification.map(item=>{
      if(item.id==itemid){
        return {
          name: elements.name.value,
          issued_by: elements.issued_by.value,
          link: elements.link.value,
          id: itemid
        }

      }

      else{
        return item
      }}))};
  
  /*
  <Page header={header} education={education} experience={experience} certification={certification}></Page>*/
  return (
    <>
      <Form handleHeader = {handleHeader} handleEducation={handleEducation} 
    handleExperience={handleExperience} education={education} deleteEducation={deleteEducation} editEducation={editEducation}
    experience={experience} deleteExperience={deleteExperience} editExperience={editExperience}
    certification={certification} handleCertification={handleCertification} deleteCertification={deleteCertification} editCertification={editCertification}
    loadTemplate={loadTemplate} clearData={clearData}
    ></Form>
   <PDFViewer  style={{ border: 0, height: '100vh', width: '100%', marginRight:"5px"}} >
    <MyDocument header={header} education={education} experience={experience} certification={certification}/>
    </PDFViewer>
    </>
  )
}

export default App
