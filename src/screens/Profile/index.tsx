import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export function Profile(): JSX.Element {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>

      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Rodrigo"
      />

      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        value="Gonçalves"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
