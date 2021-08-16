import * as React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, SafeAreaView, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export const Login = ({navigation}) => { 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [statPass, setStatPass] = React.useState(true); 

  const onPressPassword = () => { 
    if (statPass == true) { 
      setStatPass(false);
    } else  { 
      setStatPass(true); 
    }
  }

  return (
    <SafeAreaView  style={styles.container}>
      <View style={{marginTop:'10%', marginLeft:'5%'}}>
        <TextInput.Icon name="arrow-left" onPress={() => { navigation.navigate('Start'); }}/>
      </View>
      <Text style={styles.LoginText}> Login </Text>
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
      <TouchableOpacity>
        <Text style={{textAlign: 'right', marginRight: '5%', marginTop: 10,}}> 
          Forgot your password? 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center', alignItems:'center',width:80,height:80,borderRadius:40,backgroundColor:'#008E97',alignSelf: 'flex-end',right: '5%',marginTop:'15%'}} onPress={() => Alert.alert('alo')}>
        <TextInput.Icon name="arrow-right" onPress={() => Alert.alert('alo')} />
      </TouchableOpacity>
      <View style={{alignItems:'center', alignItems: 'center'}}> 
        <TouchableOpacity style={styles.LoginFB}>
          <Image source={require('../assets/fbicon.png')} style={{width:52, height:52}} />
          <Text style={{fontSize:19,color:'#fff', paddingTop: 10}}> Login with Facebook </Text>
        </TouchableOpacity> 
      </View>
      <View style={{alignItems:'center', alignItems: 'center'}}> 
        <TouchableOpacity style={styles.LoginGG}>
          <Image source={require('../assets/ggicon.png')} style={{width:52, height:52}} />
          <Text style={{fontSize:19,color:'#000', paddingTop: 10}}> Login with Google </Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  LoginText: {
    fontWeight: 'bold', 
    marginTop: '10%', 
    marginBottom: 115,
    marginLeft: '5%', 
    fontSize: 25,
  },
  LoginFB: { 
    flexDirection:'row',
    marginTop:'20%',
    width:'70%',
    backgroundColor:'#1877F2',
    borderRadius:30,
    borderColor: '#fff',
    borderWidth: 3,
    borderColor: '#1877F2'
  },
  LoginGG: { 
    flexDirection:'row',
    marginTop:'5%',
    width:'70%',
    borderRadius:30,
    borderWidth: 3,
    borderColor: '#000'
  }
});