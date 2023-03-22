import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const IconBtn = (props) => {
  const { children, style, ...event } = props;
  return (
    <TouchableOpacity style={[styles.background, { ...style }]} {...event}>
      {children}
    </TouchableOpacity>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  background: {
    padding: 14,
    borderRadius: 10,
  },
});
