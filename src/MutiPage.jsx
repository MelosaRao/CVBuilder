import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import Education from './components/PageComponents/Education';
import Experience from './components/PageComponents/Experience';
import Certification from './components/PageComponents/Certification';
Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,

});


// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    fontSize: 14,
    fontFamily: 'Open Sans',
    padding: "0.5cm",
    paddingBottom: "1cm",
  },
  section: {
    marginBottom: 25,
   /*marginLeft: 20,
    marginRight: 20,
    padding: 15,*/
    flexGrow: 1,
  },
  header: {
    color: 'white',
    textAlign: 'center',
    borderBottom: 'rgba(31, 41, 55)',
    borderTop: 'rgba(31, 41, 55, 0.2)',
    marginBottom: '0.5cm',
    backgroundColor: 'rgba(31, 41, 55)',
    paddingBottom: 10,
    paddingTop: 2,

  },
  headerdetails:{
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5cm',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 22,
    paddingBottom: 5
  },
  headingtwo:{
    fontSize: 18,
    backgroundColor: 'rgba(31, 41, 55, 0.2)',
    textAlign: 'center',
    color: '#1F2937',
    marginTop: 5,
    marginBottom:5,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: "0.5cm",
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component
const MyDocument = ({header, education, experience, certification}) => (

  <Document  title='Resume'>
    <Page size="A4" style={styles.page}>
    <View style={styles.header}>
        <Text style={styles.heading}>{header.firstName} {header.lastName}</Text>
        <View style={styles.headerdetails}>
        <Text>{header.phoneNumber}</Text>
        <Text>{header.email}</Text>
        <Text>{header.location}</Text>
        </View>
    </View>
    <View style={styles.section}>
    {education.length>0&&<Text style={styles.headingtwo}>Education</Text>}
    {education.length>0&&education.map(item=><Education education={item} key={item.id}></Education>)}

    {experience.length>0&&<Text style={styles.headingtwo}>Experience  and Projects</Text>}
    {experience.length>0&&experience.map(item=><Experience experience={item} key={item.id}></Experience>)}

    {certification.length>0&&<Text style={styles.headingtwo}>Certification</Text>}
    {certification.length>0&&certification.map(item=><Certification certification={item} key={item.id}></Certification>)}     
    </View>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `Page ${pageNumber} of ${totalPages}`
      )} fixed />
    </Page>
  </Document>

);

export default MyDocument