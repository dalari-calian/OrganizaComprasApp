import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateListStackParamList } from '../navigation/CreateListStack';

interface CardShoppingListProps {
    description: string;
    amount: number;
    createAt: string;
    typeCard: number;
    amountType: number;
    price: number;
    descItem: string;
}

const { height } = Dimensions.get('window');
const arrowPaddingTop = height * 0.015

export default function CardShoppingList({description, amount, createAt, typeCard, amountType, price, descItem}:CardShoppingListProps) {
    
    const navigation = useNavigation<NativeStackNavigationProp<CreateListStackParamList>>();

    let descType,decimal = null

    if (amountType == 1) {
        descType = 'und.'
        decimal = 0
    }

    if (amountType == 2) {
        descType = 'kg.'
        decimal = 3
    }

    if(typeCard == 1) {
        return (
            <View style={styles.containerCardList}>
                <View style={styles.containerCardInfo}>
                    <Text style={styles.descStyle}>{description}</Text>
                    <Text>{`Criada em: ${createAt}`}</Text>
                </View>
                <View style={styles.containerCardData}>
                    <Text style={styles.amountStyle}>{`Lista com ${amount} itens`}</Text>
                    <TouchableOpacity 
                        style={styles.arrowButton}
                    >
                        <Svg
                            width={24}
                            height={24}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <Path
                            fill="rgba(0, 0, 0, 0.45)"
                            d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                        />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    if(typeCard == 2) {
        return (
            <View style={styles.containerCardList}>
                <View style={styles.containerCardInfo}>
                    <Text style={styles.descStyle}>{description}</Text>
                    <Text style={styles.infoItemStyle}>{`Quantidade: ${amount.toFixed(decimal)} ${descType} Preço: R$${price.toFixed(2)}`}</Text>
                </View>
                <View style={styles.containerCardData}>
                    <Text style={styles.itemDescStyle}>{descItem != null ? `Desc: ${descItem}` : 'Sem descrição'}</Text>
                    <TouchableOpacity 
                        style={styles.arrowButton}
                        onPress={() => navigation.navigate('AddItem', {
                            description,
                            amount,
                            amountType,
                            price,
                            descItem,
                        })}
                    >
                        <Svg
                            width={24}
                            height={24}
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <Path
                            fill="rgba(0, 0, 0, 0.45)"
                            d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                        />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    arrowButton: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: arrowPaddingTop,
    },
    arrowStyle: {
        flexGrow: 1,
    },
    amountStyle: {
        fontSize: 17,
        flexGrow: 3,
        textAlign: 'left'
    },
    itemDescStyle: {
        fontSize: 17,
        flexGrow: 3,
        textAlign: 'left'
    },
    descStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerCardList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        padding: '3%',
        borderRadius: 15,
        gap: '5%',
    },
    containerCardInfo: {
        backgroundColor: '#fefefe',
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        borderRadius: 15,
        paddingLeft: '10%',
        paddingRight: '3%',
        borderWidth: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderStyle: 'solid',
    },
    containerCardData: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        paddingLeft: '3%',
        paddingRight: '3%',
    },
    infoItemStyle: {
        fontSize: 15,
    }
});