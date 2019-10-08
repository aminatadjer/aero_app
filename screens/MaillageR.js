import React, { Component } from "react";
import {StyleSheet,View, Text,TextInput,ScrollView,FlatList,Alert} from 'react-native';
import {Header,Left,Right,Body,Button,Icon, Content,Container} from 'native-base';
import MailleR from './MailleRigide';
import {DrawerActions} from 'react-navigation-drawer';

export default class Maillage extends Component
{
  constructor()
  {
      super();

      this.state = 
        { 

          TextInputValue: '0'

        }
  }
    render(){
         
        return (
    <Container>
        
            <Header style={{backgroundColor:"#C8553D"}} androidStatusBarColor="black">
          <Left>
            <Button transparent  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Icon name='menu' />
             
            </Button>
          </Left>
          <Body style ={styles.body}>
              <Text style={styles.text} >    </Text>
          </Body>
          <Right>
          
          </Right>
        </Header> 
        
        <View style ={styles.sview}>
        <Left>
            <Button style = {styles.but}  
            >
              <Icon name='arrow-back' />
              <Text style ={styles.textB}> Précedente </Text>
             
            </Button>
          </Left>
          <Body style ={styles.body}>
              <Text style={styles.text} >   Maille n 15 </Text>
          </Body>
          <Right>
           
          <Button style = {styles.but}   onPress={()=>{
 
 if( this.state.TextInputValue == 1 ){

   Alert.alert("ONE");
 }
 else{

   Alert.alert("Sorry Entered Value Dose not Exist.")

 }

}}
            >
              <Icon name='arrow-forward'/>
              <Text style ={styles.textB}>Suivante</Text>
             
            </Button>
            
          </Right>
        </View>
          <MailleR></MailleR>
          <View style ={styles.sview}>
        
        <Button style = {styles.but2}  
            >  
              <Text style ={styles.textB}>Changer la Section</Text>  
            </Button>
          <Button style = {styles.but2}  
            > 
              <Text style ={styles.textB}>Générer le fichier </Text>
             
            </Button>            
        </View>         
        </Container>
        );
    }
}
const styles = StyleSheet.create({

    text :{
        color :'#C8553D',
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
       
    },
    body : {
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        alignItems :'center'
    },
    viewGlo : {
        flexDirection : 'column'
    },
    sview :{
         backgroundColor :'#FFD5C2',
         height : 60,
         flexDirection :'row',
         
         
    },
   textB: {
       fontSize: 15,
       color :'#C8553D',
        
    },
    but :{
        flexDirection : 'column', 
        height : 60,
        width : 120,
        backgroundColor : '#FFD5C2',
    },
    but2 : {
      flexDirection : 'column', 
      height : 60,
     // alignItems:'baseline',
      //justifyContent:'space-evenly',
      backgroundColor : '#FFD5C2',
      flex : 1,
  },

})