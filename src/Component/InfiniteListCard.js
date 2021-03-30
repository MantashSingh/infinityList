import React from 'react';
import {View, Text, Image, StyleSheet , SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import colors from "../styles/colors"

function InfiniteListCard(props) {
  const{data, themeColor}= props
  return (
   
      <View style={{
        flex:1,
        
      borderRadius: 10,
      shadowColor: !!themeColor ? themeColor : colors.themeColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
      marginHorizontal:moderateScaleVertical(10),
      paddingVertical: moderateScaleVertical(10),
      flexDirection: 'row',
    }
          }>
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
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(InfiniteListCard)
const styles = StyleSheet.create({
  
    
  
  profileImage: {
    width: moderateScaleVertical(100),
    height: moderateScaleVertical(100),
    margin: moderateScaleVertical(20),
    borderRadius: 10,

  },
  name:{
      marginTop:20
  },
  
});
