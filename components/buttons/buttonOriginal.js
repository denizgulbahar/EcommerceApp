import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Dimensions 
} from "react-native";

const width = Dimensions.get('window').width;

const ButtonOriginal = ({ children, title, onPress, buttonStyle, textStyle }) => {
  
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      {/* Conditionally render Children component or Text component */}
      {children ? (
        children
      ) : (
        <Text style={[styles.buttonText, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonOriginal;
const styles = StyleSheet.create({
  button: {
    height: 50,
    borderWidth: 0,
    backgroundColor: "transparent",
    borderRadius: 12,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: width > 500 ? 22 : 18,
    fontStyle: "italic",
  }
});