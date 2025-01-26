import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateListScreen = () => {
  const [listName, setListName] = useState('');

  const handleSave = () => {
    // Salvar lista de compras
    console.log('Lista salva:', listName);
  };

  return (
    <View>
      <TextInput
        placeholder="Nome da Lista"
        value={listName}
        onChangeText={setListName}
      />
      <Button title="Salvar Lista" onPress={handleSave} />
    </View>
  );
};

export default CreateListScreen;
