import { StyleSheet, View, Text, Image, Pressable } from "react-native";

const TodoItem = ({ todoText, todoKey, handleDeleteTodo }) => {
  const deleteTodo = () => {
    handleDeleteTodo(todoKey);
  };

  return (
    <View style={styles.todoItemContainer}>
      <Text style={styles.todoText}>
        {todoText[0].toUpperCase() + todoText.slice(1)}
      </Text>
      <Pressable onPress={deleteTodo}>
        <Image
          source={require("../assets/images/dustbin.png")}
          style={styles.img}
        />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItemContainer: {
    borderColor: "#de9b96ff",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 12,
    borderRadius: 8,
    backgroundColor: "#f7dcdaff",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  todoText: {
    fontSize: 18,
    color: "#1A1A1D",
    fontWeight: 600,
  },

  img: {
    height: 25,
    width: 25,
  },
});
