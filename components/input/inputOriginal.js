import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { color } from '../../styles/color';
import { useCallback, useState } from 'react';
const InputOriginal = ({
  icon = "email",
  rightIcon = false,
  kind = "",
  multiline = false,
  keyboardType = "default",
  placeholder = "",
  editable = true,
  value = "",
  onChangeText = null,
  numberOfLines = 1,
  inputStyle = {},
}) => {
  const toggleSecureEntry = useCallback(() => {
    setSecureTextEntry(prevState => !prevState);
  },[])
  const shouldUseSecure = kind === 'password';
  const [secureTextEntry, setSecureTextEntry] = useState(shouldUseSecure);

  function handleRightIcon() {
    if(shouldUseSecure) {
      return secureTextEntry ? 'eye' : 'eye-off'
    }
    return rightIcon
  }
  
  return (
    <TextInput
        style={[ styles.input, inputStyle ]}
        value={value}
        onChangeText={onChangeText}
        left={
          <TextInput.Icon 
            icon={icon} 
            color={color.mainColor} 
            style={{ top: 13, left: 5 }} 
          /> 
        }
        right={
          <TextInput.Icon 
            icon={handleRightIcon()} 
            onPress={shouldUseSecure ? toggleSecureEntry : null} 
            color={color.mainColor} 
            style={{ top: 12, left: 5 }} 
          />   
        }
        editable={editable}
        mode="outlined"
        underlineColor="transparent"
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        placeholder={placeholder}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
      />
    
  );
};
const styles = StyleSheet.create({
  input: {
    textAlign: "left",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 7,
    outlineStyle: 'none',
    margin: 5,
  }
})

export default InputOriginal;

