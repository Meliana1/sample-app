import React from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerInputInterface {
  date: any;
  setDate: any;
  mode: 'countdown' | 'date' | 'datetime' | 'time';
}

const DatePickerInput = (props: DatePickerInputInterface) => {
  const {date, setDate, mode} = props;

  // Handle date change
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate); // Set temporary date during selection
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <DateTimePicker
        value={date}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
      />
    </View>
  );
};

export default DatePickerInput;
