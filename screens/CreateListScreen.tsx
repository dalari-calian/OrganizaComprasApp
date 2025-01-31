import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import FieldListName from '../components/FieldListName';

const { height, width } = Dimensions.get('window');

export default function CreateListScreen() {
  
  const padding = width * 0.085
  
  const [listName, setListName] = useState('');

  const handleSave = () => {
    // Salvar lista de compras
    console.log('Lista salva:', listName);
  };

  return (
    <View style={[styles.containerScreen, { paddingRight: padding, paddingLeft: padding }]}>
      <View style={styles.containerField}>
        <FieldListName/>
      </View>
      <View style={styles.containerListItens}>
        <FieldListName/>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  containerField: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});