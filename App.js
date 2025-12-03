import { StyleSheet, View } from "react-native";
import Todo from "./components/Todo";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Todo />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 72,
    paddingHorizontal: 20,
  },
});
