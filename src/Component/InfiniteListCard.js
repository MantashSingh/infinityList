import React from 'react';
import {View, Text, Image, StyleSheet , SafeAreaView} from 'react-native';

import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
export default function GoOutCard({data}) {
  return (
   
      <View style={styles.wraper}>
        <Image
          source={{uri: data.profileImg[1].original}}
          style={styles.profileImage}
        />
        <View style={{flexDirection:'column'}}>
        <Text  style={styles.name}>Name :{data.fullName}</Text>
        <Text>Talk to :{data.talkTo}</Text>
        <Text>Lives In :{data.addressDetails.city}</Text>
        <Text>Date Of Birth : {data.dob.date}/{data.dob.month}/{data.dob.year}</Text>
        <Text >Gender: {data.gender}</Text>
       
        </View>
        
      </View>
      
   
  );
}
const styles = StyleSheet.create({
  wraper: {
      flex:1,
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal:moderateScaleVertical(10),
    paddingVertical: moderateScaleVertical(10),
    flexDirection: 'row',
  },
  profileImage: {
    width: moderateScaleVertical(120),
    height: moderateScaleVertical(120),
    margin: moderateScaleVertical(20),
    borderRadius: 10,

  },
  name:{
      marginTop:20
  },
  
});
