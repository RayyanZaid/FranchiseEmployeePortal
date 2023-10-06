import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
const SCOMP = () => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      save="value"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Text color
  },
});

export default SCOMP;
