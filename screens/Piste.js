import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native';
  import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
  import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Picker,Icon,h1, Footer, Right, Left,Button } from 'native-base';
  class ListeDeroul extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    
      render(){
        const  {label,icon} = this.props
          return(
            <Content style={{marginTop:5,marginBottom:5}}>

            <Label style={{color:'#575757' ,marginLeft :25,fontSize:15}} >{label}</Label>
            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Icon active name={icon} />
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="1" value="key0" />
                    <Picker.Item label="2" value="key1" />
                    <Picker.Item label="3" value="key2" />
                  
                    
                  </Picker>
               </View>
                  </Content>
          );
      }
  }
  
export default class Piste extends React.Component{

    render(){
      const { navigation } = this.props;
     this.state={nom:navigation.getParam('nom', 'NO-ID'),}
 
        return(
            <Container>
      
            <Content>
                
           
              <Form>
              <Item stackedLabel>
                
              <Label>Longueur:</Label>
              <Icon active name='md-resize' />
              <Input keyboardType={'numeric'}  />
                </Item>
               
               
               <Item stackedLabel>
                <Icon active name='md-swap' />
                <Label>Largeur:</Label>
                  <Input keyboardType={'numeric'}  />
                </Item>
                <Item stackedLabel>
                <Icon active name='md-square' />
                <Label >Longueur actt:</Label>
                  <Input keyboardType={'numeric'}  />
                </Item>
                
               <Item  >
               
                
                
                  <ListeDeroul label='Nombre de sections:' icon='list' />
               </Item>
              
             
              </Form>
            <View style={{flexDirection:'row', }}>
            
            <Button style={{padding:10,margin:10,backgroundColor:'#C8553D',justifySelf:'flex-start'}} onPress={() => this.props.navigation.navigate('DonneeG')}>
                <Text style={{color:'#FFD5C2'}}>
                  Retour
                </Text>
              </Button>
              <Button style={{padding:10,margin:10,marginLeft:208,backgroundColor:'#C8553D',alignSelf:'flex-end'}} onPress={() => this.props.navigation.navigate('Section',{nom:this.state.nom})}>
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
    regform:{
alignSelf:'stretch',
backgroundColor:'#FFffff'

    },
    header:{
    fontSize:24,
    color:'#588B8B',
    paddingBottom:10,
    marginBottom:20,
    borderBottomColor:'#E1AC01',
    borderBottomWidth:2,

    },
    text_input: {
     
     alignSelf:'stretch',
     height:40,
     marginBottom:30,
     color:'#fff',
     borderBottomColor:"#fff",
     borderBottomWidth:1,
     
    },
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