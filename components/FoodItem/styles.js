import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  foodContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: '#fff',
  }, 
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default styles;