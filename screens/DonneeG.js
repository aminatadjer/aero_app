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
                    <Picker.Item label="Piste" value="key0" />
                    <Picker.Item label="Parking" value="key1" />
                    
                  </Picker>
               </View>
                  </Content>
          );
      }
  }
  class DateForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
      render() {

        const  {label,icon} = this.props
        return (
       
           
            <Content style={{marginTop:5,marginBottom:5}}>

              <Label style={{color:'#575757' ,marginLeft :25,fontSize:15}} >{label}</Label>
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
              <Icon active name={icon} />
              <DatePicker 
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                
                onDateChange={this.setDate}
                disabled={false}
                />
                </View>
            </Content>
        
        );
      }
  }
export default class DonneeG extends React.Component{

    render(){
        return(
            <Container>
      
            <Content>
                
           
              <Form>
              <Item stackedLabel>
                
              <Label>Nom du releveur:</Label>
              <Icon active name='person' />
              <Input />
                </Item>
                <Item >
                   <DateForm label='Date du relevé:' icon='calendar'/>
               </Item>
               
               <Item stackedLabel>
                <Icon active name='airplane' />
                <Label>Code aérodrome:</Label>
                  <Input />
                </Item>
                
               <Item  >
               
                
                
                  <ListeDeroul label='Type de l aire:' icon='list' />
               </Item>
              
               <Item stackedLabel>
                <Icon active name='alarm-on' />
                <Label>Orientation de l'aire</Label>
                  <Input />
                </Item>
              </Form>
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
              <Button style={{padding:10,margin:10,backgroundColor:'#C8553D'}}>
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