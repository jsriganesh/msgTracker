import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Label} from '../utils/label';

interface CommonButtonProps {
  label: string;
  onPressBtn: CallableFunction;
}

const CommonButton: React.FC<CommonButtonProps> = ({onPressBtn, label}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPressBtn();
      }}
      style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

interface AmountEntryProps {}

const AmountEntryPage: React.FC<AmountEntryProps> = ({}) => {
  const [enteredAmount, updateAmount] = useState<string>();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBoxstyle}
        value={enteredAmount}
        onChangeText={updateAmount}
      />
      <View style={styles.buttonRow}>
        <CommonButton label={Label.credit} onPressBtn={() => {}} />
        <CommonButton label={Label.debit} onPressBtn={() => {}} />
      </View>
    </View>
  );
};

export default AmountEntryPage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#999999',
  },
  textBoxstyle: {
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: '70%',
  },
  buttonStyle: {
    backgroundColor: '#000000',
    // paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  buttonTextStyle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  buttonRow: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
