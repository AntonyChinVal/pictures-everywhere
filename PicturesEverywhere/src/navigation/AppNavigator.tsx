import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PictureDetail from '../screens/PictureDetail';
import Pictures from '../screens/Pictures';
import Splash from '../screens/Splash';
import TakePicture from '../screens/TakePicture';
import React from 'react';
import {Route, RouteTitle} from './routes';
import {AppStackParamList} from './types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName={Route.SPLASH}
      screenOptions={{headerShown: false}}>
      <AppStack.Screen component={Splash} name={Route.SPLASH} />
      <AppStack.Screen
        options={{headerShown: true, title: RouteTitle.PICTURES}}
        component={Pictures}
        name={Route.PICTURES}
      />
      <AppStack.Screen
        options={{headerShown: true, title: RouteTitle.PICTURE_DETAIL}}
        component={PictureDetail}
        name={Route.PICTURE_DETAIL}
      />
      <AppStack.Screen
        options={{headerShown: true, title: RouteTitle.TAKE_PICTURE}}
        component={TakePicture}
        name={Route.TAKE_PICTURE}
      />
    </AppStack.Navigator>
  );
}
