import React, { useState } from 'react';
import { Modal, TextInput, ScrollView, Platform, StyleSheet, Text, View, SafeAreaView, Alert, Image, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { fontSizeScale } from '../../utility/fontSizeScale';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

class Avatar extends React.Component { 
  constructor(props) { 
    super(props); 
  }

  render() { 
    return(
        <View style={{width:'100%', height: Math.round(ScreenHeight / 14), backgroundColor: '', flexDirection:'row', borderBottomColor: '#808080', borderBottomWidth: 1, }}>
          <View style={{flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={this.props.ava} style={{width: ScreenHeight * 0.055, height: ScreenHeight * 0.055, borderRadius: ScreenHeight * 0.0275}} />
          </View>
          <View style={{flex: 2, backgroundColor: '', flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: fontSizeScale(16), fontWeight:'bold',}}> 
              {'   ' + this.props.user}
            </Text>
            <Text style={{fontSize: fontSizeScale(15), color:'#808080'}}>
              {this.props.mail}
            </Text>
          </View>
          <View style={{flex: 1.5, backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
            <View style={{flexDirection: 'row', }}>
              <Text style={{fontSize: fontSizeScale(15), fontWeight:'bold',}}> 
                { 'Wallet ' }
              </Text> 
              <Image source={require('../../../img/shopping/main/wallet.png')} style={{width: ScreenHeight * 0.025, height: ScreenHeight * 0.025}}/>
            </View>
            <Text style={{fontSize: fontSizeScale(15), color:'#808080'}}> 
              {this.props.wallet}
            </Text>
          </View>
        </View>
    );
  }
}

class Box extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      // modalVisible = false, 

    }
  }

  render() { 
    return (
      <View style={{width: ScreenWidth * 0.8, height: ScreenHeight * 0.22, backgroundColor: '#DBDBDB', marginBottom: '5%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>  
        <TouchableOpacity 
          style={{position:'absolute', bottom:'3%', right:'3%', }} 
          onPress={() => { this.props.navigation.navigate('ShowDetail', {furniture: this.props.furniture, img: this.props.img, cost: this.props.cost, precost: this.props.precost,  }); }}
        >
          <Image source={require('../../../img/shopping/suggestion/add.png')} style={{width: ScreenHeight * 0.034, height: ScreenHeight * 0.034, }}/>
        </TouchableOpacity>
        <Image source={require('../../../img/shopping/suggestion/love.png')} style={{position:'absolute', bottom:'3%', left:'3%', width: ScreenHeight * 0.034, height: ScreenHeight * 0.034, }}/>
        <TouchableOpacity 
          style={{position:'absolute', top:'3%', right:'3%',}} 
          onPress={() => { this.props.navigation.navigate('PlaceFurniture', {furniture: this.props.furniture}); }}
        >
          <Image source={require('../../../img/shopping/suggestion/place.png')} style={{width: ScreenHeight * 0.034, height: ScreenHeight * 0.034, }}/>
        </TouchableOpacity>
        <Image source={this.props.img} style={{width: '55%', height: '55%', }}/>
        <Text style={{fontWeight: 'bold', fontSize: fontSizeScale(16)}}>
          {this.props.furniture}
        </Text>
        { this.props.precost !== undefined ? 
            <View>
              <View style={{position:'absolute', top:'55%', width: '100%', borderColor: 'black', borderTopWidth: 1, }}/>
              <Text style={{fontWeight: 500, fontSize: fontSizeScale(17), color: '#7B7B7B'}}>
                {this.props.precost}
              </Text>
            </View>
            : null
        }
        <Text style={{fontWeight: 500, fontSize: fontSizeScale(17)}}>
          {this.props.cost}
        </Text>
      </View>
    );
  }
}

class Suggestion extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      img: [
        require('../../../img/shopping/suggestion/1.png'),
        require('../../../img/shopping/suggestion/2.png'),
        require('../../../img/shopping/suggestion/3.png'),
        require('../../../img/shopping/suggestion/3.png')
      ], 
      furniture: [
        'Light', 
        'Fish Tank', 
        'Frames',
        'Frames'
      ],
      cost: [
        '300.000 VND', 
        '1.500.000 VND', 
        '100.000 VND',
        '100.000 VND'
      ]
    }
  }

  render() {
    var script = []; 
    
    for (let i = 0; i < this.state.img.length; ++i) { 
      script.push(
        <Box img={this.state.img[i]} furniture={this.state.furniture[i]} cost={this.state.cost[i]} precost='100.000 VND' navigation={this.props.navigation}/>
      );
    }

    return (
      <SafeAreaView style={styles.container}>   
        <Avatar ava={require('../../../img/home/ava1.png')} user='Iron Man' mail='@ironman.Marvel' wallet='300.000 VND'/>
        <View style={{flexDirection: 'row', marginTop: '4%', marginBottom: '5%', alignItems: 'center', justifyContent: 'center', marginLeft: '3%', }}>
          <MaterialIcons name="arrow-back-ios" size={20} onPress={() => { this.props.navigation.goBack(); }}/>
          <TextInput style={{flex: 1, marginLeft: '5%', borderWidth:1, borderRadius:20, paddingLeft:15, borderColor: '#94BF72', }} placeholder='What do you mean?'/> 
          <FontAwesome style={{ marginLeft: '1%', marginRight: '7%',  }} name="search" size={fontSizeScale(15)} color="#000"/>
        </View>
        <ScrollView style={{flexGrow:1, backgroundColor:''}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center', justifyContent: 'center', }}>
            { script }
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    // paddingBottom: 25, 
  },

});

export default Suggestion; 