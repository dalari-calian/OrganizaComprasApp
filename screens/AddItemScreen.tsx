import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import FieldAddItem from '../components/FieldAddItem';
import { useRoute, RouteProp } from '@react-navigation/native';
import { CreateListStackParamList } from '../navigation/CreateListStack';

const { width, height } = Dimensions.get('window');

type AddItemScreenRouteProp = RouteProp<CreateListStackParamList, 'AddItem'>;

export default function AddItemScreen({ navigation }) {
  
  const route = useRoute<AddItemScreenRouteProp>();
  const { description, amount, amountType, price, descItem } = route.params || {};

  const padding = width * 0.085;
  const paddingTop = height * 0.03;

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSave = () => {
    console.log('Item salvo:', itemName, quantity);
    navigation.goBack(); // Retorna para a tela anterior após salvar
  };

  return (
    <View style={[styles.container , {paddingLeft: padding, paddingRight: padding, paddingTop: paddingTop}]}>
      <FieldAddItem
        placeholder='Preencha o nome do item'
        type={1}
        value={description}
      />
      <View style={styles.containerAmount}>
        <View style={styles.amount}>
          <FieldAddItem
            placeholder='Preencha a quantidade'
            type={1}
            value={amount}
          />
        </View>
        <View style={styles.amountType}>
          <FieldAddItem
            placeholder='Unidade'
            type={3}
            value={amountType}
          />
        </View>
      </View>
      <FieldAddItem
        placeholder='Preencha o preço do item'
        type={1}
        value={price}
      />
      <FieldAddItem
        placeholder='Preencha a descrição do item'
        type={2}
        value={descItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: '3%',
  },
  containerAmount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    display: 'flex',
    width: '65%',
  }, 
  amountType: {
    display: 'flex',
    width: '30%',
  }, 
});
