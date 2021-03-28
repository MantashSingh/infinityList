import { apiDelete, apiGet, apiPost, apiPut, clearUserData, getItem, setItem, setUserData , } from '../../utils/utils';
import { OTP_VERIFY ,LOGIN ,USER_SEARCH } from '../../config/urls';
import types from '../types';
import store from '../store';

const {dispatch}=store;

export function loginWithOTP(data = {}) {

 

  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data).then(res => {
    
      console.log(res , "login with otp")
     

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}



export function OTPVerify(data = {}) {

 

  return new Promise((resolve, reject) => {
    apiPost(OTP_VERIFY, data).then(res => {
    
      setUserData(res.data).then(suc=>{
      
          dispatch({
              type:types.OTP_VERIFY,
              payload:res.data
          })
      })

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}


export const onLogout=()=>{
  
  dispatch({
  type:types.ON_LOGOUT,
})

}


export function UserData(data = {}) {



  return new Promise((resolve, reject) => {
    apiPost(USER_SEARCH , data).then(res => {
    
      console.log(res , "User Data")

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}





