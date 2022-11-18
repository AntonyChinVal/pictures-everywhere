import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, View} from 'react-native';
import styles from './styles';
import {AppNavigationProp} from '../../navigation/types';
import {useAppSelector} from '../../store/common';
import {pictureSelector} from '../../store/slices/pictures';

const Picture: React.FC<AppNavigationProp> = () => {
  const picture = useAppSelector(pictureSelector);

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        <Image style={styles.picture} source={{uri: picture?.url}} />
      </View>
    </SafeAreaView>
  );
};

export default Picture;
