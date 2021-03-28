import {useState} from 'react';
import {clearUserData} from '../../utils/utils';

import ActionTypes from '../types';

const initialState = {
  userData: {},
  
  

};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    
    case ActionTypes.OTP_VERIFY: {
      const userData = action.payload;
      console.log(userData, "reducer UserData");
      return {...state, userData};
    }

    case ActionTypes.ON_LOGOUT: {
      
      clearUserData();
      // alert(state.userData)
      return {...state, userData:{}};
    }
   
    default: {
      return {...state};
    }
  }
}
