import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import actions from '../../redux/actions'
import CustomButton from "../../Component/CustomButton"
import Header from '../../Component/Header'
export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    render() {


        return (
            <View style={{flex:1}}>
                <Header textData={"Profile"} onBack={()=>this.handleBackButtonClick()}/>
            <View style={styles.wraper}>
                
                <CustomButton buttonText={"LOG OUT"} onButtonCLick={()=>actions.onLogout()}/>
                <CustomButton buttonText={"Change Theme"} onButtonCLick={()=>alert()}/>
                
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    wraper:{
        marginTop:"auto",
        marginBottom:"auto"
    }


})
