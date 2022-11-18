import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  takeButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 20,
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'gray',
  },
});

export default styles;
