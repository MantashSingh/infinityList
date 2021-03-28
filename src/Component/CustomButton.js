import React from 'react'
import { View, Text , TouchableOpacity , StyleSheet} from 'react-native'
import colors from '../styles/colors'

export default function customButton({buttonText , onButtonCLick}) {

  
    return (
        <View>
           <TouchableOpacity
          style={styles.sendOTPTouch}
          onPress={ ()=>onButtonCLick() }>
          <Text style={styles.sendOTPText}>{buttonText}</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
   
        sendOTPTouch: {
            backgroundColor: colors.themeColor,
            height: 50,
            marginHorizontal: 30,
            borderRadius: 10,
            marginTop: 10,
          },
          sendOTPText: {
            color: colors.buttonText,
            fontSize: 18,
            textAlign: 'center',
            marginVertical: 12,
          },
        
    
})

