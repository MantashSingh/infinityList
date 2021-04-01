import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

function Header(props) {
  const {textData, onBack, themeColor} = props;
  return (
    <View style={{flexDirection: 'row' ,backgroundColor:!!themeColor ? themeColor : colors.themeColor , marginBottom:0 , borderBottomRightRadius:10 , borderBottomLeftRadius:10}} >
      <TouchableOpacity onPress={() => onBack()} >
        <Image source={imagePath.backIcon} 
        style={{
            width: 40,
            height: 40,
            marginVertical: moderateScaleVertical(8),
            marginHorizontal: moderateScaleVertical(15),
            tintColor: "white"
          }} />
      </TouchableOpacity>
      <Text
        style={{
          marginVertical: 9,
          fontSize: 25,
          color: "white",
        }}>
        {textData}
      </Text>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor,
  };
};

export default connect(mapStateToProps)(Header);

