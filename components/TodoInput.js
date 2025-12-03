import { Image, Modal, StyleSheet, TextInput, View } from "react-native";
import FlatButton from "./Button";
import { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";

const TodoInput = ({ isModalVisible, handleModalClose, handleAddTodo }) => {
  const [inputTodo, setInputTodo] = useState("");

  const handleChangeInputTodo = (inputTodo) => {
    setInputTodo(inputTodo);
  };

  const handleTodoAdd = () => {
    handleAddTodo(inputTodo);
    setInputTodo("");
  };

  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.todoInputContainer}>
        <Image
          source={require("../assets/images/flower.png")}
          style={styles.img}
        />
        <TextInput
          placeholder="Add a new todo"
          style={styles.input}
          onChangeText={handleChangeInputTodo}
          value={inputTodo}
        />
        <View style={styles.buttonContainer}>
          <FlatButton
            title="Cancel"
            onPress={handleModalClose}
            variant="primary"
          />
          <FlatButton
            title="Add Todo"
            variant="primary"
            onPress={handleTodoAdd}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  todoInputContainer: {
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DA746F",
  },

  img: {
    height: 100,
    width: 100,
    margin: 28,
  },

  input: {
    backgroundColor: "#FFFAFE",
    width: "80%",
    borderRadius: 8,
    margin: 12,
    padding: 12,
    fontSize: 20,
    color: "#1A1A1D",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    width: "80%",
  },
});
