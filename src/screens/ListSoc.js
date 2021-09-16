import * as React from 'react';
import { Box, Text, Pressable } from 'native-base';
import { FlatList } from 'react-native';

export default function ListSoc({ navigation }) {
  const socialMedia = ['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Dribbble'];

  const handlerPress = (value) => {
    navigation.navigate('Detail Social', { value });
  };
  return (
    <Box>
      <FlatList
        data={socialMedia}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlerPress(item)}>
            <Text>{item}</Text>
          </Pressable>
        )}
      />
    </Box>
  );
}
