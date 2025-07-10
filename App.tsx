import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [text,setText] = useState('')
  const [todo, setTodo]= useState<{id:number;text:string;}[]>([]);

  const addTodo = (text: string) => {
    if (text.trim() !== "") {
    const newTodo = {
      id: Date.now(),
      text: text}
      setTodo([...todo, newTodo]);
    }
    setText(''); 
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>To do List:</Text>
      <View>
        {todo.map(item => (
         <Text key={item.id}>• {item.text}</Text>
        ))}
      </View>
      <TextInput
        value={text}
        placeholder="Enter todo"
        onChangeText={(text) => setText(text)}
      />
      <Button title='Add' onPress={()=>addTodo(text)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    textDecorationLine: 'underline',
  }
});
