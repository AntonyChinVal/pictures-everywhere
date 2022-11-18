import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Route} from './routes';

export type AppStackParamList = {
  [Route.SPLASH]: undefined;
  [Route.PICTURES]: undefined;
  [Route.PICTURE_DETAIL]: undefined;
  [Route.TAKE_PICTURE]: undefined;
};

export type AllRoutes = AppStackParamList;

export type AllNames = Route;

export type AppNavigationProp<RouteName extends keyof AllRoutes = AllNames> =
  NativeStackScreenProps<AllRoutes, RouteName>;
