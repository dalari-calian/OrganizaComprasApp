import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions, ScrollView } from 'react-native';
import FieldListName from '../components/FieldListName';
import ButtonSaveAdd from '../components/ButtonSaveAdd';
import CardShoppingList from '../components/CardShoppingList';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateListStackParamList } from '../navigation/CreateListStack';

const { height, width } = Dimensions.get('window');

export default function CreateListScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<CreateListStackParamList>>();
  
  const margin = width * 0.085;
  const paddingScrollTop = height * 0.02
  const cardHeight = height * 0.15;
  const fieldContainerHeight = height * 2;
  
  const [listName, setListName] = useState('');

  const handleSave = () => {
    // Salvar lista de compras
    console.log('Lista salva:', listName);
  };

  return (
    <View style={styles.containerScreen}>
      <View style={[styles.containerField, {marginLeft: margin, marginRight: margin }]}>
        <FieldListName/>
      </View>
      <LinearGradient
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
        style={styles.gradient}
      />
      <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingTop:  paddingScrollTop, marginLeft: margin, marginRight: margin }]}>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Coca Cola 2L"}
            amount={1}
            typeCard={2}
            amountType={1}
            price={12.00}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Uva passa"}
            amount={0.200}
            typeCard={2}
            amountType={2}
            price={8.00}
            descItem={"Pegar a granel"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Tomate Cereja"}
            amount={12}
            typeCard={2}
            amountType={1}
            price={25.99}
            descItem={"Os mais vermelhos"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Tomate Cereja"}
            amount={12}
            typeCard={2}
            amountType={1}
            price={25.99}
            descItem={"Os mais vermelhos"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Tomate Cereja"}
            amount={12}
            typeCard={2}
            amountType={1}
            price={25.99}
            descItem={"Os mais vermelhos"}
          />
        </View>
        <View style={styles.containerButtons}>
          <View style={styles.containerAddItem}>
            <ButtonSaveAdd
              label={'Adicionar Item'}
              heightSize={0.045}
              widthSize={0.30}
              marginTopSize={0}
              fontSize={15}
              onPress={() => navigation.navigate('AddItem')}
            />
          </View>
          <View style={styles.containerSaveButton}>
            <ButtonSaveAdd
              label={'Salvar Lista'}
              heightSize={0.055}
              widthSize={0.40}
              marginTopSize={0.025}
              fontSize={20}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  containerButtons: {
    flex: 1,
    width: '100%'
  },
  gradient: {
    position: 'absolute',
    top: '18%',
    left: 0,
    right: 0,
    height: 20,
    zIndex: 1,
  },
  containerSaveButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerAddItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  },
  containerField: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '18%',
  },
  containerListItens: {
    flex: 1,
    flexGrow: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCard: {
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
    gap: '4%',
    paddingBottom: '50%',
  },
});