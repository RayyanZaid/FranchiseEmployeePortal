import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  { label: "Employee", value: "Employee" },
  { label: "Manager", value: "Manager" },
  { label: "Admin", value: "Admin" },
];

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const DropdownComponent = ({ sendDataToParent }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (item) => {
    setValue(item.value);
    setIsFocus(false);

    sendDataToParent(item.value); // Pass the selected value directly
  };

  console.log("Role: ", value);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>Role</Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select Your Role" : "Choose"}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => handleInputChange(item)}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",

    margin: screenHeight * 0.04,
    width: screenWidth * 0.55,
    height: screenHeight * 0.07,
  },
  dropdown: {
    height: screenHeight * 0.08,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
    margin: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
