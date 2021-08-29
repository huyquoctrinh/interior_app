import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, SafeAreaView, Dimensions, Alert, Image, TouchableOpacity, Animated, Easing, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class Home extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <MaterialIcons style={{marginLeft: '3%',}} name="arrow-back-ios" size={20} color='#94BF72' onPress={() => { navigation.goBack(); }}/> */}
        <View style={styles.header}>
          <View style={{marginTop: '3%', width:Math.round(ScreenWidth * 0.93), height:Math.round(ScreenHeight * 0.0233), flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{height:'105%', backgroundColor: '#94BF72', width:'11%',justifyContent:'flex-start', borderTopLeftRadius: 10, }}/>
            <Text style={{fontSize:20, fontWeight:'bold', color: '#94BF72', marginTop: '-2%'}}> InTerior </Text>
            <View style={{height:'105%', backgroundColor: '#94BF72', width:'11%',justifyContent:'flex-end', borderTopRightRadius: 10, }}/>
          </View>
          <View style={{flex:1, backgroundColor: '#94BF72', width:Math.round(ScreenWidth * 0.93), borderWidth:0, borderBottomRightRadius: 10, borderBottomLeftRadius: 10,}}>
            <View style = {{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Icon style={{ marginLeft: '3%' }} name="search" size={35} color="#000"/>
              <TextInput style={{paddingLeft: '2%', marginLeft: '6%', height:'19%', borderRadius:30, width: '77%', backgroundColor:'white'}}/>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={{width:'100%',height:Math.round(ScreenHeight * 0.16), backgroundColor:'white',flexDirection:'row',}}>
            <View style={{height: '100%', width:'40%', alignItems:'center', justifyContent:'center', backgroundColor:'',}}>
              <Image source={require('../../img/home/ava1.png')}  style={{width:90, height:90,}}/>
            </View>
            <View style={{flex:1}}> 
              <View style={{flex:1}}>
                <Text style={{marginLeft:'20%', fontSize:30, fontWeight:'bold',}}>
                  Iron Man 
                </Text>
                <Text style={{marginLeft:'20%', color:'#808080'}}>
                  @ironman.Marvel
                </Text>
              </View>
              <View style={{flex:1, backgroundColor:'', alignItems:'center', }}>
                <TextInput style={{height:'70%', width:'100%', borderWidth:1, borderRadius:10, padding:4,}} placeholder='What do you mean?'/>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  header: {
    height:'15%', 
    width:'100%',
    alignItems:'center',
  },

  content: { 
    flex: 1,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
});

export default Home;