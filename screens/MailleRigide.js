import React, { Component } from "react";
import {StyleSheet,View, Text,TextInput,ScrollView,FlatList} from 'react-native';
import { Grid } from "native-base";



export default class MailleRigide extends React.Component
{
    render(){
        return(
            
            <ScrollView horizontal >
                <ScrollView >
                  <View style={styles.veiw} > 
                      <Text style ={styles.do}> Dégradation</Text>
                       <Text style ={styles.do}> Léger </Text>
                       <Text style ={styles.do}> Moyen</Text>
                       <Text style ={styles.do}> Elevé</Text>

                   </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Fissure</Text>
                    <TextInput placeholder ={'dalle'} style ={styles.do} keyboardType={'numeric'}></TextInput>
                    <TextInput placeholder ={'dalle'}style ={styles.do} keyboardType={'numeric'}></TextInput>
                    <TextInput placeholder ={'dalle'}style ={styles.do} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Fracture</Text>
                    <TextInput style ={styles.do } placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Cassure d'angle</Text>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Epaufrure </Text>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Faiençage/Ecaillage</Text>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'dalle'} keyboardType={'numeric'} ></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Reparation ponctuelle dégradée </Text>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Défaut de joint</Text>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Pompage</Text>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Déclage/Marche</Text>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
              
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Dépot de gomme</Text>
                    <TextInput   style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'dalle'} keyboardType={'numeric'}></TextInput>

                </View>
                
                </ScrollView>
             </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
   veiw :{
                          height: 70,
                    flexDirection: "row",
                    flex: 1,
                    //borderWidth: 1,
                    padding: 2,
                   justifyContent: "flex-start"


   },
   scroll :{
    padding : 5,
    },
    do:  {            
            width  : 120,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            color :'black',
        }



})