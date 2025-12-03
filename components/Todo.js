import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "./TodoInput";
import { useState } from "react";
import FlatButton from "./Button";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleAddTodo = (inputTodo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { text: inputTodo, key: Math.random().toString() }];
    });
    handleModalClose();
  };

  const handleDeleteTodo = (todoKey) => {
    console.log(todoKey);
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.key !== todoKey;
      });
    });
  };

  return (
    <View style={styles.todoContainer}>
      <View style={styles.buttonContainer}>
        <FlatButton
          title="Add New Todo"
          variant="secondary"
          onPress={() => setIsModalVisible(true)}
        />
      </View>

      <TodoInput
        isModalVisible={isModalVisible}
        handleModalClose={handleModalClose}
        handleAddTodo={handleAddTodo}
      />
      <View style={styles.todoItemContainer}>
        <FlatList
          data={todos}
          renderItem={(item) => {
            console.log(item);
            return (
              <TodoItem
                todoText={item.item.text}
                todoKey={item.item.key}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    height: "100%",
  },

  buttonContainer: {
    margin: 16,
  },

  todoItemContainer: {
    flex: 5,
  },
});
