import React, { Component } from "react";
import {StyleSheet,View, Text} from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body,Item } from "native-base";
import { Form, Input, Label,Icon,Button } from 'native-base';
export default class Maille extends Component {
  render() {
    const { navigation } = this.props;
    this.state = {nbMaille:(navigation.getParam('longueurS', 'NO-ID')) / (navigation.getParam('longueurM', 'NO-ID'))};
    return (
      <Container>
        <Content >
          <Card>
              
            <CardItem header bordered>
              <Text style = {{color : '#C8553D'}}>Informations Saisies  : </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Text>
          Nom relevé:{' '}
          {JSON.stringify(navigation.getParam('nom', 'default value'))}
        </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Aérodrome : {' '}
          {JSON.stringify(navigation.getParam('code', 'default value'))} </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Orientation : {' '}
          {JSON.stringify(navigation.getParam('orientation', 'default value'))} </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Date : {' '}
          {JSON.stringify(navigation.getParam('date', 'default value'))} </Text>
               
              </Body>
            </CardItem>
           
            <CardItem bordered>
              <Body>
                <Text>Numéro de section : {' '}
          {JSON.stringify(navigation.getParam('numSec', 'default value'))} </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Type de Section : {' '}
          {JSON.stringify(navigation.getParam('typeSec', 'default value'))} </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Nombre de Mailles  : {this.state.nbMaille} </Text>
               
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              
                 
              
             
              <Item stackedLabel style={{width:310}} >
                
              <Label style ={{ color :'#C8553D'}}>Numéro de Maille</Label>
              <Icon active name='md-grid' style={{marginLeft:10}} />
              <Input keyboardType={'numeric'} style={{}}/>
               </Item > 
              
        
            </CardItem>
            </Card>
            <View style={{flexDirection:'row', }}>
            <Button style={{padding:10,margin:10,backgroundColor:'#C8553D',justifySelf:'flex-start'}} onPress={() => this.props.navigation.navigate('Section')}>
                <Text style={{color:'#FFD5C2'}}>
                  Retour
                </Text>
              </Button>
              <Button style={{padding:10,margin:10,marginLeft:208,backgroundColor:'#C8553D',alignSelf:'flex-end'}}>
                <Text style={{color:'#FFD5C2'}}>
                  Valider
                </Text>
              </Button>
             
             
            </View>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    

});