import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Camera, PhotoFile, useCameraDevices} from 'react-native-vision-camera';
import {AppNavigationProp} from '../../navigation/types';
import {pushPicture} from '../../store/slices/pictures';
import {useAppDispatch} from '../../store/common';

const Picture: React.FC<AppNavigationProp> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const camera = React.useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const onTake = React.useCallback(async () => {
    try {
      const photo: PhotoFile = await camera.current!.takePhoto();
      const date = new Date();
      dispatch(
        pushPicture({
          id: date.toJSON(),
          url: photo.path,
          thumbnail: photo.path,
        }),
      );
      navigation.pop();
    } catch (error) {
      console.debug(error);
    }
  }, [dispatch, navigation]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        {device && (
          <Camera
            ref={camera}
            style={styles.camera}
            device={device}
            isActive={true}
            photo={true}
          />
        )}
        <TouchableOpacity onPress={onTake} style={styles.takeButton} />
      </View>
    </SafeAreaView>
  );
};

export default Picture;
