import React from 'react';
import { Text, View } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Body, ActionSheet } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator, } from 'react-navigation-tabs';
import DonneeG from './DonneeG';
import Section from './Section';
import Piste from './Piste';
import Maille from './Maille';
import { createAppContainer,tabBarOptions,TabBarNavigationConfig } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const MainNavigator = createStackNavigator({
  DonneeG: DonneeG,
  Piste: Piste,
  Section: Section,
  Maille: Maille,
});

const StackNav = createAppContainer(MainNavigator);


const Tab = createMaterialTopTabNavigator(
 {
    
  DonneeG: DonneeG,
  Piste: Piste,
  Section: Section,
  Maille: Maille,
 }, {
   tabBarOptions:{
    style: {
      backgroundColor: '#FFD5C2',
    },
     activeTintColor:'#C8553D',
     inactiveTintColor:'#C8553D',
     pressColor:'grey',
     scrollEnabled:false,
     indicatorStyle:{backgroundColor:'#C8553D'},
   }
 }

);
const TabTop = createAppContainer(Tab);
export default class User extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#C8553D" }} androidStatusBarColor="black">
          <Left>
            <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
          </Body>
          <Right>
          </Right>
        </Header>



        <Content>
        <TabTop screenProps={{}}/>
        </Content>
      </Container>
    );
  }
}