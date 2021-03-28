import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile , Home , List} from "../Screens/index";
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';


// import imagePath from '../constants/imagePath';
// import colors from '../constants/color';

const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (

    <Tab.Navigator tabBarOptions={{
      activeTintColor: colors.themeColor,

  }}
  >
   
      <Tab.Screen
        name="List"
        component={List}
        options={{
        tabBarIcon: ({ focused }) => (
          <Image source={imagePath.list}
              style={{width: 25,
                height: 25,
                marginTop: 10,  
                tintColor: focused ? colors.themeColor : "gray",}}
          />
        )}}
        />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.home}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                  tintColor: focused ? colors.themeColor : "gray",}}
            />
          )}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={imagePath.profile}
                style={{width: 25,
                  height: 25,
                  marginTop: 10,  
                  tintColor: focused ? colors.themeColor : "gray",}}
            />
          )}}
      />
     
    </Tab.Navigator>
  );
}

export default TabRoutes;

const styles = StyleSheet.create({
  Icon: {
    
  },
});
