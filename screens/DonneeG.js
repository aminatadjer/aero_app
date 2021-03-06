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
                    <Picker.Item label="Veuillez choisir:" value="0" />
                    <Picker.Item label="Piste" value="Piste" />
                    <Picker.Item label="Parking" value="Parking" />
                    
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
        this.props.parentCallback(newDate.toString().substr(4, 12));
      }
      render() {

        const  {label,icon} = this.props;
        
        return (
       
           
            <Content style={{marginTop:5,marginBottom:5}}>

              <Label style={{color:'#575757' ,marginLeft :25,fontSize:15}} >{label}</Label>
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
              <Icon active name={icon} />
              <DatePicker 
      
               
               
                locale={"fr"}
                timeZoneOffsetInMinutes={undefined}
                
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Choisir date"
                onDateChange={this.setDate}
                disabled={false}
                />
                </View>
                <View>
                <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
                </View>
            </Content>
        
        );
      }
  }
export default class DonneeG extends React.Component{
  constructor(props) {
    super(props);
    this.state = {nom: '',date:'',code: '',type: '',orientation: ''};
  }
  callbackFunction = (childData) => {
    this.setState({type: childData})
}
callbackFunctionDate = (childData) => {
  this.setState({date: childData})
}
    render(){
        return(
            <View>
                
           
              <Form>
              <Item stackedLabel>
                
              <Label>Nom du releveur:</Label>
              <Icon active name='person' />
              <Input    onChangeText={(nom) => this.setState({nom})} value={this.state.nom} />
                </Item>
                <Item >
                   <DateForm label='Date du relevé:' icon='calendar' parentCallback = {this.callbackFunctionDate} value={this.state.date}/>
               </Item>
               
               <Item stackedLabel>
                <Icon active name='airplane' />
                <Label>Code aérodrome:</Label>
                  <Input onChangeText={(code) => this.setState({code})} value={this.state.code} />
                </Item>
                
               <Item  >
               
                
                
               <ListeDeroul label='Type de l aire:' icon='list' parentCallback = {this.callbackFunction}  value={this.state.type}/>
               </Item>
              
               <Item stackedLabel>
                <Icon active name='md-create' />
                <Label>Orientation de l'aire</Label>
                  <Input onChangeText={(orientation) => this.setState({orientation})} value={this.state.orientation} />
                </Item>
              </Form>
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
           
              <Button style={{padding:10,margin:10,backgroundColor:'#C8553D'}}  onPress={() => this.props.navigation.navigate('Piste',{nom:this.state.nom, date:this.state.date, code:this.state.code, type:this.state.type, orientation:this.state.orientation} )}>
                <Text style={{color:'#FFD5C2'}}>
                  Valider
                </Text>
              </Button>
            </View>
            <Text>
                {this.state.nom}
                {this.state.date}
                {this.state.type}
              </Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
  
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