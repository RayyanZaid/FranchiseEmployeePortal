import React, { useState } from "react";
import { Text, Button, SafeAreaView, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const imgDir = FileSystem.documentDirectory + "images/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);

  if (dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};
const selectImage = async (useLibrary) => {
  let result;
  const options = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.75,
  };
  if (useLibrary) {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    result = await ImagePicker.launchImageLibraryAsync(options);
  } else {
    await ImagePicker.requestCameraPermissionsAsync();
    result = await ImagePicker.launchCameraAsync(options);
  }

  if (!result.canceled) {
    console.log(result.assets[0].uri);
  }
};

const saveImage = async (uri) => {
  await ensureDirExists();
  const filename = new Date().getTime() + ".png";
  const dest = imgDir + filename;

  await FileSystem.copyAsync({ from: uri, to: dest });
};
const ImageUploadComponent = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button title="Photo Library" onPress={() => selectImage(true)} />
        <Button title="Capture Image" onPress={() => selectImage(false)} />
      </View>
    </SafeAreaView>
  );
};

export default ImageUploadComponent;
