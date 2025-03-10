import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import CardShoppingList from '../components/CardShoppingList';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  
  const cardHeight = height * 0.15;
  const cardPaddingBotton = height * 0.12;
  
  return (
    <View style={styles.containerScreen}>
      <LinearGradient
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
        style={styles.gradient}
      />
      <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom: cardPaddingBotton}]}>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
            typeCard={1}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
            typeCard={1}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
            typeCard={1}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
            typeCard={1}
          />
        </View>
        <View style={[styles.containerCard, { height: cardHeight }]}>
          <CardShoppingList
            description={"Compras Mercado Koch"}
            amount={16}
            createAt={"23-01-2025"}
            typeCard={1}
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
    paddingTop: '7%',
  },
  scrollContainer: {
    alignItems: 'center',
    gap: '4%',
    flexGrow: 1,
    paddingTop: '3%'
  },
  containerCard: {
    width: '80%',
  },
  gradient: {
    position: 'absolute',
    top: '3.9%',
    left: 0,
    right: 0,
    height: 20,
    zIndex: 1,
  },
});