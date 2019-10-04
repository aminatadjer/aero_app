import React, { Component } from "react";
import {StyleSheet,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Item } from "native-base";
import { Form, Input, Label,Icon,Button } from 'native-base';
export default class Maille extends Component {
  render() {
    return (
      <Container>
        <Content padder>
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
              
                 
              
             
              <Item stackedLabel>
                
              <Label style ={{ color :'#C8553D'}}>Numéro de Maille</Label>
              <Icon active name='md-create' />
              <Input keyboardType={'numeric'} />
                </Item > 
              
        
            </CardItem>
            </Card>
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
              <Button style={{padding:10,margin:10,backgroundColor:'#C8553D'}}>
                <Text style={{color:'#FFD5C2'}}>
                  Commencer
                </Text>
              </Button>
            </View>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
    
    button:{
      alignSelf:'flex-end',
      alignItems:'center',
      paddingRight:40,
      paddingLeft:40,
      paddingTop:20,
      paddingBottom:20,
      backgroundColor:"#fefbd8",
      marginTop:30,
      borderRadius:5,
    },
});