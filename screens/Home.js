import React from 'react';
import { Image, StyleSheet ,ScrollView} from 'react-native';
import {Icon, Button, Container, Header, Content, Left,Right, Body, } from 'native-base';
import { View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';
import {DrawerActions} from 'react-navigation-drawer';
const cards = [
  {
    text: 'Etape 1 ',
    name: ' Glisser',
    image: require('../assets/izan.png'),
    text2 :'Cliquer sur la barre à gauche ou glissser vers la droite pour que le Drawer S affiche, Ensuite choississez User pour commencer la procédure   '
  },
  {
    text: 'Etape 2',
    name: ' Glisser',
    image: require('../assets/izan.png'),
    text2 :'Une fois que le User est sélectionné.Commencez tout d abord par compléter la partie DonnéG ensuite cliquez sur suivant et Complétez les données liées à la piste ensuite cliquez sur suivant et  complétez les  informations des Sections et enfin cliquez sur suivant. '
  },
  {
    text: 'Etape 3',
    name: ' Glisser',
    image: require('../assets/airplane.png'),
    text2 :'Choisissez le numéro de Maille et cliquez sur commencer dans la page Maille pour que  le Maillage débutera , Complétez les informations de chaque maille et à la fin cliquez sur génèrer fichier '
  },
  
];
export default class Home extends React.Component {
  render() {
    return (
      <View >
         <Header style={{backgroundColor:"#C8553D"}} androidStatusBarColor="black">
          <Left>
            <Button transparent  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
              <Icon name='menu' />
             
            </Button>
          </Left>
          <Body>
            
          </Body>
          <Right>

          </Right>
        </Header>
        
        <View style =  {{marginTop : 20,padding : 15 }}>
          <DeckSwiper
          
            dataSource={cards}
            renderItem={item =>
              <Card style={styles.card} >
                <CardItem  style={styles.cardItem} >
                  <Left style={{marginTop :5}}>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text style >{item.text}</Text>
                      <Text note> Manuel d'utilisation</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody bordered style={styles.cardItem} >
                  <Text style={{ height: 400, flex: 1 ,padding : 2 ,fontSize : 25}} > {item.text2} </Text>
                </CardItem>
                <CardItem  style={styles.cardItem}>
                  <Left>
                  <Image source ={require('../assets/swipe.png')}></Image>
                  </Left>
                  <Body>
                  <Text>{item.name}</Text>
                  </Body>
                  <Right>
                  <Image source ={require('../assets/swipe.png')}></Image>
                  </Right>
                </CardItem>
              </Card>
            }
          />
        </View>
        
      </View>
      
        
      
    );
  }
}
const styles = StyleSheet.create({
  card: {
  
  
  },
  cardItem: {
   
  },
})