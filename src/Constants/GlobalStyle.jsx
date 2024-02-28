import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {Font} from '../utils/font';

export const GlobalStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  Trans_Container: {
    flex: 1,
  },
  CustomButtonRestyle: {
    backgroundColor: Colors.White,
    width: '85%',
  },
  Padding: {
    paddingHorizontal: moderateScale(15),
  },
  textRestyle: {
    color: Colors.Main,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Space_Between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showBar: {
    display: 'flex',
    backgroundColor: Colors.BlackOp,
    height: verticalScale(50),
    borderTopColor: Colors.BlackOp,
    borderTopWidth: scale(1),
  },
  HideBar: {
    display: 'none',
  },
  ModalText: {
    fontSize: scale(16),
    textAlign: 'center',
    padding: moderateScale(20),
    fontFamily: Font.Work600,
    color: Colors.Main,
  },
  ModalContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.ThemeCream,
    width: '70%',
    alignSelf: 'center',
    borderRadius: scale(20),
  },
  MainModal: {
    justifyContent: 'center',
    margin: 0,
  },
  ModalLine: {
    width: '20%',
    height: verticalScale(4),
    backgroundColor: Colors.Grey,
    alignSelf: 'center',
    borderRadius: scale(10),
    marginVertical: verticalScale(15),
  },
  Modal_Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  LottieView: {
    height: verticalScale(150),
    alignSelf: 'center',
  },

  Image: {
    width: '100%',
    height: '100%',
  },
  Yellow_Ripple: {
    color: '#FDBB26',
    borderless: true,
    foreground: true,
  },
  Vertical_Space: {
    height: verticalScale(15),
  },
  Shadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextShadow: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  MapContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  StatusBar: {
    marginTop: StatusBar.currentHeight + scale(10),
  },
  Height: {
    height: verticalScale(10),
  },
  SettingButton: {marginTop: verticalScale(25), width: '90%'},
  ArrowCircle: {
    borderRadius: 100,
    backgroundColor: Colors.Black,
    width: scale(30),
    aspectRatio: 1 / 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
});
