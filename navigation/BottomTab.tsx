import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CreateListScreen from '../screens/CreateListScreen';
import { TouchableOpacity, Dimensions } from 'react-native';
import HomeIcon from '../icons/HomeIcon';
import PlusIcon from '../icons/PlusIcon';
import ConfigIcon from '../icons/ConfigIcon';

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('window');

export default function BottomTab() {

    const iconMarginTop = height * 0.015;
    const iconHomeSize = height * 0.06;
    const iconPlusSize = height * 0.06;
    const heigthBottonTab = height * 0.09
    const paddingTopBottonTab = height * 0.006
    const heigthIcon = height * 0.06
    const widthIcon = width * 0.13
     
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#5790BB',
                    height: heigthBottonTab,
                    paddingTop: paddingTopBottonTab,
                },
                tabBarActiveTintColor: 'white', // Cor ativa
                tabBarInactiveTintColor: 'white', // Cor inativa
                tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1}/>,
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon color={color} size={iconHomeSize} />
                    ),
                    tabBarLabel: '',
                    tabBarIconStyle: {
                        marginTop: iconMarginTop,
                    },
                }}
            />
            <Tab.Screen 
                name="Criar" 
                component={CreateListScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <PlusIcon color={'#5790BB'} size={iconPlusSize} />
                    ),
                    tabBarLabel: '',
                    tabBarIconStyle: {
                        backgroundColor: 'white',
                        borderRadius: 30,
                        height: heigthIcon,
                        width: widthIcon,
                    },
                }}
            />
            <Tab.Screen 
                name="Opções" 
                component={CreateListScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ConfigIcon color={color} size={iconPlusSize} />
                    ),
                    tabBarLabel: '',
                    tabBarIconStyle: {
                        marginTop: iconMarginTop,
                    },
                }}
            />
        </Tab.Navigator>
    );
}