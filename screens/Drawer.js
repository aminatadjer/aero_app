import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './Home';
import Settings from './Settings.js';
import User from './User.js';
import { Container, Header, Body, Content, Icon, Footer, Button, Left, Right } from 'native-base';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems, } from 'react-navigation-drawer';
import { SafeAreaContext, SafeAreaProvider } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaillageS from './MaillageS';
import {BackHandler,Alert} from 'react-native';

class Exit extends  React.Component
{
  render(){
    return (
      <Button onPress = { ()=> 
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      )} />
    );
  }
}


const CustomDrawer = props => (
  <Container style={{ backgroundColor: 'transparent' }}>
    <ScrollView style={{}} >
      <SafeAreaProvider>
        <SafeAreaView style={{}}>
          <Container style={Styles.Container}>
            <Header style={{ height: 200, width: 280, margin: 0, backgroundColor: '#C8553D' }} androidStatusBarColor="black">
              <Image source={require('../assets/airplanee.png')} style={Styles.ImageDrawer} ></Image>
            </Header>
            <Content>
              <Text></Text>
              <DrawerNavigatorItems {...props} style={{}} />
            </Content>


          </Container>

        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
    
    <Footer style={{ backgroundColor: "#C8553D" }}>
      <Left style={{ paddingLeft: 1, }}>

      <Button transparent style ={{ backgroundColor: "#C8553D", }} onPress = { ()=> 
      Alert.alert(
        'Alerte',
        'Voulez vous vraiment quitter ? ',
        [
         
          {
            text: 'Annuler',
            style: 'cancel',
          },
          {text: 'Oui', onPress: () => BackHandler.exitApp()},
        ],
        {cancelable: false},
      )} >
        
        <Body style = {{flexDirection : 'row',padding : 15,alignItems :'flex-start',justifyContent :'flex-start'}}>
          <Icon active name='log-out' style={{ color: "#FFD5C2",fontSize:25 }} />
          <Text style={{color : '#FFD5C2',fontSize : 18,textDecorationLine:'underline' }}>Quitter</Text>
        </Body>
        
      </Button>
      </Left>


    </Footer>
  </Container>


);


const RootStack = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        style: {
          backgroundColor: '#FFD5C2',
        },
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" style={{ color: tintColor }}   />
        ),

      },

      screen: Home,

    },
    User: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="people" style={{ color: tintColor }}  />
        ),

      },
      screen: User,
    },
    Setting: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="settings" style={{ color: tintColor }} />
        ),
      },
      screen: Settings,
    },
    },
  {
    
    initialRouteName: 'Home',
    contentComponent: CustomDrawer,
  }
);



const Drawer = createAppContainer(RootStack);
export default class DrawerJs extends React.Component {
  render() {
    return (
      <Drawer style={{ backgroundColor: 'transparent' }} />
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,



  },
  ImageDrawer: {
    padding: 1,
    width: 120, height: 120, marginLeft: 5,
    borderWidth: 0,
    borderRadius: 0,

    margin: 25,


  },
});
