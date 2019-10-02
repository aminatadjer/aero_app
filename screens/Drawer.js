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



const CustomDrawer = props => (
  <Container style={{ backgroundColor: 'transparent' }}>
    <ScrollView style={{}} >
      <SafeAreaProvider>
        <SafeAreaView style={{}}>
          <Container style={Styles.Container}>
            <Header style={{ height: 200, width: 280, margin: 0, backgroundColor: '#C8553D' }} androidStatusBarColor="black">
              <Image source={require('../assets/log1.png')} style={Styles.ImageDrawer} ></Image>
            </Header>
            <Content>
              <Text></Text>
              <DrawerNavigatorItems {...props} style={{}} />
            </Content>


          </Container>

        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>

    <Footer style={{ backgroundColor: "#fff" }}>
      <Left style={{ paddingLeft: 0, }}>


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
          <Icon name="home" style={{ color: tintColor }} />
        ),

      },

      screen: Home,

    },
    User: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="people" style={{ color: tintColor }} />
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


