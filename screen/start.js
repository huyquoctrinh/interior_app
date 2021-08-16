import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity } from 'react-native';

export const Start = ({navigation}) => {
  const SignUpFunction = () => { 
    navigation.navigate('SignUp');
  }

  const LoginFunction = () => { 
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView  style={styles.container}>
      <ImageBackground source={require('../assets/start.png')} style={styles.image}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.SignUpButton} onPress={ SignUpFunction }>
            <Text style={styles.TextStyle}> SIGN UP </Text>    
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton} onPress={ LoginFunction }>
            <Text style={styles.TextStyle}> LOGIN </Text>    
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const dimensions = Dimensions.get('window');
const logoWidth = Math.round(dimensions.width * 65 / 100);
const logoHeight = logoWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  logo: {
    marginTop: Math.round(dimensions.height * 12 / 100),
    width: logoWidth,
    height: logoHeight,
  },
  SignUpButton: {
    marginTop:'67%',
    paddingTop:15,
    paddingBottom:15,
    width:'70%',
    backgroundColor:'#008E97',
    borderRadius:30,
    borderColor: '#fff'
  }, 
  LoginButton: {
    marginTop:'5%',
    paddingTop:10,
    paddingBottom:10,
    width:'70%',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20,
  },
});