import { Pressable, StyleSheet, Text } from "react-native";

const FlatButton = ({ title, onPress, variant = "primary" }) => {
  return (
    <Pressable
      style={[styles.buttonContainer, styles[variant]]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, styles[`${variant}Text`]]}>{title}</Text>
    </Pressable>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  primary: {
    backgroundColor: "#383333ff",
  },

  secondary: {
    backgroundColor: "#DA746F",
  },

  primaryText: {
    color: "#FFFAFE",
  },

  secondaryText: { color: "#FFFAFE" },

  buttonText: {
    fontSize: 18,
    fontWeight: 600,
  },
});
