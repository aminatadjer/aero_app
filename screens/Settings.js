import React from 'react';
import { Text, View } from 'react-native';
import {Icon, Button, Container, Header, Content, Left,Right, Body,ActionSheet} from 'native-base';
import {DrawerActions} from 'react-navigation-drawer';

export default class Settings extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#C8553D"}}androidStatusBarColor="black">
          <Left>
            <Button transparent  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
              <Icon name='menu' />
             
            </Button>
          </Left>
          <Body>
            
          </Body>
          <Right>

          </Right>
        </Header>
        <Content>
        <Text>Settings</Text>
        </Content>
      </Container>
    );
  }
}