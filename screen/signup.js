import * as React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export const SignUp = ({navigation}) => { 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [statPass, setStatPass] = React.useState(true); 
  const [statConfirmPass, setStatConfirmPass] = React.useState(true); 


  const onPressPassword = () => { 
    if (statPass == true) { 
      setStatPass(false);
    } else  { 
      setStatPass(true); 
    }
  }

  const onPressConfirmPassword = () => { 
    if (statConfirmPass == true) { 
      setStatConfirmPass(false);
    } else  { 
      setStatConfirmPass(true); 
    }
  }

  return (
    <SafeAreaView  style={styles.container}>
      <View style={{marginTop:'10%', marginLeft:'5%'}}>
        <TextInput.Icon name="arrow-left" onPress={() => { navigation.navigate('Start'); }}/>
      </View>
      <Text style={styles.SignUpText}> Sign Up </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode='outlined'
        outlineColor='#BBB8B8'
        selectionColor='#BBB8B8'
        underlineColor='#BBB8B8'
        style={{marginLeft: '5%', width:'90%'}}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        mode='outlined'
        outlineColor='#BBB8B8'
        selectionColor='#BBB8B8'
        underlineColor='#BBB8B8'
        style={{marginLeft: '5%', width:'90%', marginTop: 10,}}
        secureTextEntry={statPass}
        right={<TextInput.Icon name="eye" onPress={onPressPassword}/>}  
      />
      <TextInput
        label="Confirm Password"
        value={confirmpassword}
        onChangeText={text => setConfirmPassword(text)}
        mode='outlined'
        outlineColor='#BBB8B8'
        selectionColor='#BBB8B8'
        underlineColor='#BBB8B8'
        style={{marginLeft: '5%', width:'90%', marginTop: 10,}}
        secureTextEntry={statConfirmPass}
        right={<TextInput.Icon name="eye" onPress={onPressConfirmPassword}/>}  
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={text => setPhone(text)}
        mode='outlined'
        outlineColor='#BBB8B8'
        selectionColor='#BBB8B8'
        underlineColor='#BBB8B8'
        style={{marginLeft: '5%', width:'90%', marginTop: 10,}}
      />
      <TouchableOpacity style={{justifyContent:'center', alignItems:'center',width:80,height:80,borderRadius:40,backgroundColor:'#008E97',alignSelf: 'flex-end',right: '5%',marginTop:'15%'}} onPress={() => Alert.alert('alo')}>
        <TextInput.Icon name="arrow-right" onPress={() => Alert.alert('alo')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  SignUpText: {
    fontWeight: 'bold', 
    marginTop: '10%', 
    marginBottom: 115,
    marginLeft: '5%', 
    fontSize: 25,
  },
});