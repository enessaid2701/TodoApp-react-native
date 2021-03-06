import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './compenents/header';
import TodoItem from './compenents/todoItem'; 
import AddTodo from './compenents/addTodo';


export default function App  () {
  const [todos, setTodos] = useState([]);

   

  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) =>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }
  return (
    <TouchableWithoutFeedback onPress ={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style = {styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style = {styles.list}>
          <FlatList 
          data = {todos}
          renderItem = {({  item  }) => (
          <TodoItem item ={item}  pressHandler= {pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#EFEFF9',

  },
  content: {
    padding : 40,
  },
  list: {
    marginTop: 20,
  }
});

