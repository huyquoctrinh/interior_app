import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/home';
import Time from './Screen/sr2';
import ProductScanRNCamera from './Screen/camsrc';
// import './Screen/profile'
import { profile } from './Screen/profile';
// import './Screen'
import {MainDashBoard} from './Screen/dashb';
import MainLogin from './Screen/login';
import HomeStack from './Screen/stackHome';
import TimeTable from './Screen/timetb';
import Day1 from './Screen/timetb';
import Day2 from './Screen/timetb';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Start} from "./Screen/start";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 16, padding: 4, backgroundColor: 'rgba(255,255,255,1)' },
      tabStyle: { width: 'auto', height: 32, backgroundColor: 'rgba(255,255,255,1)' },
      style: { height: 32,backgroundColor: 'rgba(255,255,255,1)' },
    }}
    >
      {/* <Tab.Screen name="Timetable" component={TimeTable} /> */}
      <Tab.Screen name="Day 1" component={Day1} options={{ title: '11' }} />
      <Tab.Screen name="Day 2" component={Day2} options={{ title: '12' }} />
      <Tab.Screen name="Day 3" component={Day2} options={{ title: '13' }} />
      <Tab.Screen name="Day 4" component={Day2} options={{ title: '14' }} />
      <Tab.Screen name="Day 5" component={Day2} options={{ title: '15' }} />
      <Tab.Screen name="Day 6" component={Day2} options={{ title: '16' }} />
      <Tab.Screen name="Day 7" component={Day2} options={{ title: '17' }} />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }} initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={MainLogin} />
        {/* <Stack.Screen name="Home" component={HomeStack} /> */}
        <Stack.Screen name="Home" component={MainDashBoard} />
          {/* <Stack.Screen name="Home" component={MainDashBoard} /> */}
          <Stack.Screen name="Profile" component={profile} />
          <Stack.Screen name="Scan QR" component={ProductScanRNCamera} />
          <Stack.Screen name="Scan Result" component={Time} />
          <Stack.Screen name="Timetable" component={MyTabs} screenOptions={{ headerShown: true}} />
        {/* <Stack.Screen name="Profile" component={profile} /> */}
        {/* <Stack.Screen name="Scan QR" component={ProductScanRNCamera} /> */}
        {/* <Stack.Screen name="Scan Result" component={Time} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;