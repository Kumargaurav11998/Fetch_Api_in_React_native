import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Animated,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import {AuthActtion} from '../../Action/AuthAction';
import TextInputeComponent from '../../Component/TextInputeComponent';
import TouchComponent from '../../Component/TouchCompoent';
import {color} from '../../utils/colors';
import {styles} from './Loginstyle';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import Spinner from 'react-native-loading-spinner-overlay';
const {width, height} = Dimensions.get('window');
function LoginScreen(props) {
  const [isusername, setusername] = useState('');
  const [ispass, setpass] = useState('');
  const [isloader, setloader] = useState(false);
  const dispatch = useDispatch();
  const isLogin = () => {
    if (!isusername) {
      ToastAndroid.show('Enter user name ', ToastAndroid.SHORT);
    } else if (!ispass) {
      ToastAndroid.show('Enter user name ', ToastAndroid.SHORT);
    } else {
      setloader(true);
      const data = {
        email: isusername.trim(),
        password: ispass.trim(),
      };

      dispatch(AuthActtion.LoginAction(data)).then(async data => {
        if (data) {
          setloader(false);
          ToastAndroid.show(data.token, ToastAndroid.SHORT);
          props.navigation.replace('HomeScreen');
        } else {
          setloader(false);
          ToastAndroid.show('Something went Wrong', ToastAndroid.SHORT);
        }
      });
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <Text style={[styles.logo]}>Login</Text>
        <View style={[styles.txtinpute]}>
          <Text style={[styles.label]}>Username</Text>
          <TextInputeComponent
            placeholder="Enter Your Username"
            borderWidth={1}
            width={width - 50}
            alignSelf={'center'}
            borderRadius={10}
            placeholderTextColor={color.black}
            borderColor={color.appcolor}
            onchange={v => setusername(v)}
          />
        </View>
        <View style={[styles.txtinpute]}>
          <Text style={[styles.label]}>Password</Text>
          <TextInputeComponent
            placeholder="Enter Your password"
            borderWidth={1}
            width={width - 50}
            alignSelf={'center'}
            borderRadius={10}
            placeholderTextColor={color.black}
            borderColor={color.appcolor}
            onchange={v => setpass(v)}
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.btn]}>
          <TouchComponent
            title="Login"
            titlecolor={color.white}
            backgroundColor={color.appcolor}
            borderRadius={10}
            paddingVertical={'3%'}
            paddingHorizontal={'8%'}
            press={() => isLogin()}
          />
        </View>
      </ScrollView>
      {isloader && (
        <Spinner
          visible={true}
          textContent={'please wait...'}
          textStyle={styles.loadertxt}
          customIndicator={
            <UIActivityIndicator
              style={styles.loaderstyle}
              color={color.appcolor}
            />
          }
        />
      )}
    </SafeAreaView>
  );
}
export default LoginScreen;
