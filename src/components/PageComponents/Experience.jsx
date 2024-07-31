import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import FormatDate from '../FormatDate';


const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    fontSize: 14,
  },
  org: {
    fontWeight:"extrabold",
  },
  Tdate:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

const Experience = ({experience}) => (
  <View style={styles.container}>
    <View style={styles.Tdate}><Text style={styles.org}>{experience.organisation} {"-"} {experience.title}</Text>
    
    <Text>{FormatDate(experience.from)} - {FormatDate(experience.to)}</Text>
    </View>
    <Text>{experience.description}</Text>
    {experience.technolgies&&(<Text>Skills: {experience.technolgies}</Text>)}
  </View>
);

export default Experience;
