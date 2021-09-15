import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  box: {
    height: '100%',
    width: '100%',
    padding: 22,
    paddingTop: 80,
  },
  heading: {
    paddingLeft: 10,
  },
  textHeading: {
    fontSize: 28,
  },
  result: {
    backgroundColor: 'white',
    height: 85,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    marginBottom: 50,
  },
  textResult: {
    fontSize: 26,
  },
  HStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  btnNumber: {
    width: '22%',
    backgroundColor: '#FF5757',
    textAlign: 'center',
  },
  btnAction: {
    width: '22%',
    height: 70,
    backgroundColor: '#930707',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  },
  textStar: {
    paddingTop: 15,
  },
});
