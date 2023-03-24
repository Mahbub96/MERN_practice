import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ date, setDate }) => {
  const [show, setShow] = useState(false);

  const OnChange = (e) => {
    setShow(false);
    const time = e.nativeEvent.timestamp;
    const newDate = new Date(time).toISOString().substring(0, 10);
    setDate(newDate);
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={{ fontSize: 18 }}>Date & Time</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 16,
          borderRadius: 12,
          borderColor: "#dddddd",
          marginTop: 12,
        }}
        onPress={() => setShow(true)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "gray" }}>{date || "Select Date"}</Text>
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker mode="date" value={new Date()} onChange={OnChange} />
      )}
    </View>
  );
};
export default DatePicker;
