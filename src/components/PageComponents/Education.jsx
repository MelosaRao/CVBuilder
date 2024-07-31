import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import FormatDate from '../FormatDate';


const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    fontSize: 14,
  },
  school: {
    fontWeight:"extrabold",
  },
  Tdate:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

const Education = ({education}) => (
  <View style={styles.container}>
    <View style={styles.Tdate}><Text style={styles.school}>{education.inst}</Text>
    
    <Text>{FormatDate(education.from)} - {FormatDate(education.to)}</Text>
    </View>
    <Text>{education.degree}</Text>
  </View>
);

export default Education;

