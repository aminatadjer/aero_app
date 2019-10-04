import React, { Component } from "react";
import {StyleSheet,View, Text} from 'react-native';
import { Container, Header, Content, Card, CardItem,  Body,Item } from "native-base";
import { Form, Input, Label,Icon,Button } from 'native-base';
export default class Maille extends Component {
  render() {
    return (
      <Container>
        <Content >
          <Card>
            <CardItem header bordered>
              <Text style = {{color : '#C8553D'}}>Informations Saisies  : </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Aérodrome : Alg029</Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Orientation : 16/0084 </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Date : 04/10/2019 </Text>
               
              </Body>
            </CardItem>
           
            <CardItem bordered>
              <Body>
                <Text>Numéro de section : 02 </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Type de Piste : Rigide </Text>
               
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Nombre de Mailles  : 15 </Text>
               
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