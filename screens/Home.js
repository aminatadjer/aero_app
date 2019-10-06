import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {Icon, Button, Container, Header, Content, Left,Right, Body, } from 'native-base';
import { View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';
import {DrawerActions} from 'react-navigation-drawer';
const cards = [
  {
    text: 'Etape 1 ',
    name: ' Glisser',
    image: require('../assets/izan.png'),
    text2 :'dans cette étape 1 on va  '
  },
  {
    text: 'Etape 2',
    name: ' Glisser',
    image: require('../assets/izan.png'),
    text2 :'dans cette étape 2 on va ......'
  },
  {
    text: 'Etape 3',
    name: ' Glisser',
    image: require('../assets/izan.png'),
    text2 :'dans cette étape 3 on va ......'
  },
  
];
export default class Home extends React.Component {
  render() {
    return (
      <Container >
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
                  <Text style={{ height: 400, flex: 1 }} > {item.text2} </Text>
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
        
      </Container>
      
        
      
    );
  }
}
const styles = StyleSheet.create({
  card: {
  
  
  },
  cardItem: {
   
  },
})