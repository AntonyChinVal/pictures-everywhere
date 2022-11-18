import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Route} from '../../navigation/routes';
import {AppNavigationProp} from '../../navigation/types';
import styles from './styles';

const Splash: React.FC<AppNavigationProp> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace(Route.PICTURES);
    }, 3000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Pictures App</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
