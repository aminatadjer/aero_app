import React, { Component } from "react";
import {StyleSheet,View, Text} from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body,Item } from "native-base";
import { Form, Input, Label,Icon,Button } from 'native-base';
import StackNavMaille from "./gotoMaille";
import Maillage from './Maillage';
import Maille from './Maille';
import { createAppContainer,tabBarOptions,TabBarNavigationConfig } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const MainNavigator = createStackNavigator({
  
  Maille: Maille,
  Maillage:Maillage,


});
const StackNav=  createAppContainer(MainNavigator);

export default StackNav;