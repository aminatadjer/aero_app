import MaillageR from './MaillageR';
import MaillageS from './MaillageS';
import Section from './Section';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const stack = createStackNavigator({
    Routepricipale: {screen : MaillageR},
    RouteSection:   {screen : Section} ,
    });
createAppContainer(stack);