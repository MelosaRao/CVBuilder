import React from 'react';
import { Text, View, StyleSheet,Link } from '@react-pdf/renderer';
import FormatDate from '../FormatDate';


const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    fontSize: 14,
  },
  cert: {
    fontWeight:"extrabold",
  },
  Tdate:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});

const Certification = ({certification}) => {
    if(certification.link){
        return(
            <View style={styles.container}>
                <Text><Link src={`${certification.link}`}><Text style={styles.cert}>{certification.name}</Text></Link>issued  by {certification.issued_by}</Text>
            </View>
        )
    }
    else{
    return(
        <View>
            <Text>{certification.name} issued  by {certification.issued_by}</Text>
        </View>
            

    )}}

export default Certification;

