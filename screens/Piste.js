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
          selected2: ""
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
        this.props.parentCallback(value);
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
                    <Picker.Item label="Veuillez choisir le nombre de sections" value="0" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                  
                    
                  </Picker>
                  <Text>{this.state.selected2}</Text>
               </View>
                  </Content>
          );
      }
  }
  
export default class Piste extends React.Component{
  constructor(props) {
    
    super(props);
    this.state={longueurP:0,LargeurP:0,longueurActtP:0,nbsections:''}
  }

  callbackFunction = (childData) => {
    this.setState({nbsections: childData})
  }
     
    render(){
      const { navigation } = this.props;
      this.state1={nom:navigation.getParam('nom', 'NO-ID'),date:navigation.getParam('date', 'NO-ID'),code:navigation.getParam('code', 'NO-ID'),orientation:navigation.getParam('orientation', 'NO-ID')};
     

     return(
            <Container>
      
            <Content>
                
           
              <Form>
              <Item stackedLabel>
                
              <Label>Longueur:</Label>
              <Icon active name='md-resize' />
              <Input keyboardType={'numeric'} onChangeText={(longueurP) => this.setState({longueurP})} value={this.state.longueurP} />
                </Item>
               
               
               <Item stackedLabel>
                <Icon active name='md-swap' />
                <Label>Largeur:</Label>
                  <Input keyboardType={'numeric'} onChangeText={(LargeurP) => this.setState({LargeurP})} value={this.state.LargeurP} />
                </Item>
                <Item stackedLabel>
                <Icon active name='md-square' />
                <Label >Longueur actt:</Label>
                  <Input keyboardType={'numeric'} onChangeText={(longueurActtP) => this.setState({longueurActtP})} value={this.state.longueurActtP} />
                </Item>
                
               <Item  >
               
                
                
                  <ListeDeroul label='Nombre de sections:' icon='list'  parentCallback = {this.callbackFunction} value={this.state.nbsections}/>
               </Item>
              
             
              </Form>
            <View style={{flexDirection:'row', }}>
            
            <Button style={{padding:10,margin:10,backgroundColor:'#C8553D',justifySelf:'flex-start'}} onPress={() => this.props.navigation.navigate('DonneeG')}>
                <Text style={{color:'#FFD5C2'}}>
                  Retour
                </Text>
              </Button>
              <Button style={{padding:10,margin:10,marginLeft:208,backgroundColor:'#C8553D',alignSelf:'flex-end'}} onPress={() => this.props.navigation.navigate('Section',{nom:this.state1.nom,date:this.state1.date,code:this.state1.code,orientation:this.state1.orientation},)}>
                <Text style={{color:'#FFD5C2'}}>
                  Valider
                </Text>
              </Button>
             
             
            </View>
         
            </Content>
           <View>
           <Text>
            hello  {this.state.nbsections}
            {this.state1.date}
            </Text>
           </View>
            
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