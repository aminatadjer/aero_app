import React from 'react';
import { Text, View } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Right, Body, ActionSheet } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator, } from 'react-navigation-tabs';
import DonneeG from './DonneeG';
import Section from './Section';
import Piste from './Piste';
import Maille from './Maille';
import MaillageR from './MailleRigide';
import MaillageS from './MailleSolide';
import { createAppContainer,tabBarOptions,TabBarNavigationConfig } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

  export default class Maillage extends React.Component {
      render(){
        const { navigation } = this.props;
          return(
              <View>
                  <Text> Maillage</Text>
              </View>
          );
      }
  }