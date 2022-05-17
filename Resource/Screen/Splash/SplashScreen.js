import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Text, Animated, StatusBar} from 'react-native';
import {color} from '../../utils/colors';
import {styles} from './SplashStyle';
function SplashScreen(props) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    move();
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);
  const move = () => {
    setTimeout(() => {
      props.navigation.replace('LoginScreen');
    }, 3000);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={color.appcolor} />
      <Animated.Text style={[styles.txts, {opacity: fadeAnim}]}>
        Machine Test
      </Animated.Text>
    </SafeAreaView>
  );
}

export default SplashScreen;
