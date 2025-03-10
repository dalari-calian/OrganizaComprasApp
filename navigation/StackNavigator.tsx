import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import AddItemScreen from '../screens/AddItemScreen';
import { useNavigation } from '@react-navigation/native';
import BackArrowIcon from '../icons/BackArrowIcon';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { 
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleAlign: 'left',
        headerTitleStyle: { fontSize: 18, fontWeight: '500'},
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="MainTabs" 
        component={BottomTab} 
        options={{ 
            headerShown: false,
            navigationBarColor: "#5790BB",
         }} 
      />
      <Stack.Screen 
        name="AddItem" 
        component={AddItemScreen} 
        options={{ 
          headerTitle: '',
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 0 }}
              >
                <BackArrowIcon color="black" size={25} /> 
                <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 5 }}>Lista</Text>
              </TouchableOpacity>
            );
          }
        }} 
      />
    </Stack.Navigator>
  );
}
