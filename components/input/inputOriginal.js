import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { color } from '../../styles/color';
import { useEffect, useState } from 'react';
const InputOriginal = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  useEffect(() => {
    setSecureTextEntry(props.secureTextEntry);
  },[])

  let rightIcon;

  if(props.rightIcon) {
    rightIcon = props.rightIcon;
  } 

  if(props.kind === 'password') {
    rightIcon = secureTextEntry ? 'eye' : 'eye-off'
  } 
  return (
    <TextInput
        label={props.label}
        style={[ 
          styles.input, props.inputStyle,
        ]}
        value={props.value}
        onChangeText={props.onChangeText}
        left={!props.noIcon ? 
          <TextInput.Icon 
            icon={props.icon ? props.icon : "email"} 
            color={color.mainColor} 
            style={{ top: 13, left: 5 }} 
          /> 
          : false
        }
        right={
          <TextInput.Icon 
            icon={rightIcon} 
            onPress={props.kind==="password" ? toggleSecureEntry : null} 
            color={color.mainColor} 
            style={{ top: 12, left: 5 }} 
          />   
        }
        editable={props.editable}
        mode="outlined"
        underlineColor="transparent"
        secureTextEntry={secureTextEntry}
        multiline={props.multiline}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        numberOfLines={props.numberOfLines}
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

