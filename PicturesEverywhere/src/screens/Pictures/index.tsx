import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Camera} from 'react-native-vision-camera';
import {Route} from '../../navigation/routes';
import {AppNavigationProp} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../store/common';
import {PictureVM} from '../../store/model/PictureVM';
import {picturesSelector, selectPicture} from '../../store/slices/pictures';
import styles from './styles';

const pictureContainerSize = Dimensions.get('window').width / 3;
const pictureSize = pictureContainerSize - 20;

const Pictures: React.FC<AppNavigationProp> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const pictures = useAppSelector(picturesSelector);

  const onTakePicture = React.useCallback(async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission === 'denied') {
      Linking.openSettings();
      return;
    }
    if (cameraPermission === 'authorized') {
      navigation.navigate(Route.TAKE_PICTURE);
      return;
    }
    const newCameraPermission = await Camera.requestCameraPermission();
    if (newCameraPermission === 'authorized') {
      navigation.navigate(Route.TAKE_PICTURE);
    }
  }, [navigation]);

  const onSelectPicture = React.useCallback(
    (picture: PictureVM) => {
      dispatch(selectPicture(picture));
      navigation.navigate(Route.PICTURE_DETAIL);
    },
    [dispatch, navigation],
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <FlatList
        numColumns={3}
        style={styles.pictures}
        data={pictures}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.pictureContainer,
              {width: pictureContainerSize, height: pictureContainerSize},
            ]}
            onPress={() => onSelectPicture(item)}>
            <Image
              style={{height: pictureSize, width: pictureSize}}
              source={{uri: item.thumbnail}}
            />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.takeButton} onPress={onTakePicture}>
        <Text style={styles.takeText}>Take Picture</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Pictures;
