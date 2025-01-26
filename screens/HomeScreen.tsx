import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import CardShoppingList from '../components/CardShoppingList';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  
  const cardHeight = height * 0.15;
  const cardPaddingBotton = height * 0.12;
  
  return (
    <View style={styles.containerScreen}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom: cardPaddingBotton}]}>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '10%',
  },
  scrollContainer: {
    alignItems: 'center',
    gap: '3%',
    flexGrow: 1,
  },
  containerCard: {
    width: '80%',
  },
});