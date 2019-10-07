import React, { Component } from "react";
import {StyleSheet,View, Text,TextInput,ScrollView,FlatList} from 'react-native';

export default class MailleSolide extends React.Component
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
                    <Text style ={styles.do}> Flache</Text>
                    <TextInput placeholder ={'m'} style ={styles.do} keyboardType={'numeric'}></TextInput>
                    <TextInput placeholder ={'m'}style ={styles.do} keyboardType={'numeric'}></TextInput>
                    <TextInput placeholder ={'m'}style ={styles.do} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Orniere frayée</Text>
                    <TextInput style ={styles.do } placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Fissure de fatigue</Text>
                    <TextInput style ={styles.do} placeholder ={'m'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'m'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'m'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Faiençage de fatigue </Text>
                    <TextInput style ={styles.do} placeholder ={'ml'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'ml'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'ml'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style ={styles.do}> Desenrobage/brulure/pelade</Text>
                    <TextInput style ={styles.do} placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style ={styles.do} placeholder ={'m²'} keyboardType={'numeric'} ></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > fissure de joint</Text>
                    <TextInput style={styles.do}  placeholder ={'ml'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'ml'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'ml'} keyboardType={'numeric'}></TextInput>

                </View>
                
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Fissure de retrait</Text>
                    <TextInput style={styles.do}  placeholder ={'ml'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'ml'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'ml'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Faiençage de retrait</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Déformation en W</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
              
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Gonfelement-Bourrelet</Text>
                    <TextInput   style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Terrassement différentiel/marche </Text>
                    <TextInput style={styles.do}  placeholder ={'m'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Répartition ponctuelle dégradée </Text>
                    <TextInput style={styles.do}  placeholder ={'m²'}keyboardType={'numeric'} ></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Fissure parabolique</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Empreinte/poinçennement</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Nid de poule </Text>
                    <TextInput style={styles.do}  placeholder ={'U'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Contamination</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Dépot de gomme</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Enobré poreux</Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Remontée d'eau </Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Remontée de fine </Text>
                    <TextInput  style={styles.do} placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    

                </View>
                <View style={styles.veiw} > 
                    <Text style={styles.do} > Ressuage </Text>
                    <TextInput style={styles.do}  placeholder ={'m²'} keyboardType={'numeric'}></TextInput>
                    

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