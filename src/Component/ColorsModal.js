import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ceil } from 'react-native-reanimated'
import {moderateScale , moderateScaleVertical} from "../styles/responsiveSize"
import Loader from './Loader'
import actions from "../redux/actions"
export default function ColorsModal( {data}) {
    return (
        <View style={{flex:1 ,}}> 
        <TouchableOpacity onPress={()=>actions.ChangeThemeColor(data.colorId)}>
        <View style={{backgroundColor:data.colorId , height:moderateScaleVertical(100) , borderRadius:10}}>

            <Text style={styles.dataText}>{data.name}</Text>
            
        </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dataText:{
        textAlign:'center',
        marginTop:'auto',
        marginBottom:'auto',
        color:"white"
    }
})
