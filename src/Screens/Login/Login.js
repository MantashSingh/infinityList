import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import TextInputComponent from "../../Component/TextaInputComponent"
import strings from "../../constants/lang"
import CustomButton from "../../Component/CustomButton"
import { showMessage, hideMessage } from "react-native-flash-message";
import validations from "../../utils/validations";
import actions from "../../redux/actions"
 
export default class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            
            isvalid:""
        };
      }
    
    
    
      
      setNumber = (text) => {

        this.setState({
            phoneNumber: text
        })
        
    
    
    }
    
    
    
    isValidate = () => {
        const { phoneNumber } = this.state;
    
        let errorMessage = validations({phoneNumber:phoneNumber})
        // alert()
        if (errorMessage) {
    
            showMessage({
                message: errorMessage,
                icon:"warning",
                type: "danger",
            });
            return false
        }
    
        return true
    }
    
    
    checkData = () => {
        const { phoneNumber} = this.state;
        // alert("hi")
    
        if (this.isValidate()) {
            
            actions.loginWithOTP({contactDetails:{phoneNo: (phoneNumber),
              countryCode: "+91",
              countryCodeISO: "IN"}
            })
                .then(response => {
                   
                        // console.log(response +"   1")
                        this.props.navigation.navigate("Verification" , {userId:response.data.userId ,phoneNumber:phoneNumber} )
                        
                        
                        
                        showMessage({
                            type:"success",
                            message:"OTP sent successfully "
                        })
                        
                        
                }).catch((error) => {
                    this.setState({ isvalid: false }),
                    showMessage({
                        type:"danger",
                        message:"Login failed "
                    })
                    
                        console.log(error)
                })
        }
    
    }




    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.input}>
                    <TextInputComponent
                    placeholder={strings.ENTER_PHONE_NUMBER}
                    keyboardType={"numeric"}
                    onChangeText={this.setNumber}
                    />
                    </View>
                    <CustomButton buttonText={strings.SEND_OTP} onButtonCLick={()=>this.checkData()}/>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"green",
        marginTop:"auto",
        marginBottom:"auto"
    },

})
