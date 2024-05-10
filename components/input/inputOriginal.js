import { TextInput } from 'react-native-paper';
import { Dimensions, View, StyleSheet } from 'react-native';
import { color } from '../../styles/color';

const InputOriginal = (props) => {
  const width = Dimensions.get('window').width;
  return (
    <TextInput
        label={props.label}
        style={[ 
          styles.input, props.inputStyle,
        ]}
        value={props.value}
        onChangeText={props.onChangeText}
        left={!props.noIcon ? 
        <TextInput.Icon icon={props.icon ? props.icon : "email"} color={color.mainColor} 
        style={{ top: 13, left: 5, }} /> :
        false
        }
        right={props.rightIcon ? 
        <TextInput.Icon icon={props.rightIcon} color={color.mainColor} style={{ top: 12, left: 5 }} /> 
        : 
        false}
        editable={props.editable}
        mode="outlined"
        underlineColor="transparent"
        secureTextEntry={props.secureText}
        multiline={props.multiline}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        defaultValue={props.defaultValue}
        numberOfLines={props.numberOfLines}
      />
    
  );
};
const styles = StyleSheet.create({
  input: {
    textAlign: "left",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal:7,
    outlineStyle: 'none',
    margin:5,
  }
})

export default InputOriginal;

