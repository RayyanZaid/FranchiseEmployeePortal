import React, { useEffect, useState } from "react";
import {
  Text,
  Button,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import global_button_styles from "../global_button_styles";
import global_text_styles from "../global_text_styles";

const imgDir = FileSystem.documentDirectory + "images/";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const defaultProfilePicture = require("../assets/defaultProfilePicture.png");

const ensureDirExists = async () => {
  try {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
    }
  } catch (error) {
    console.error("Error ensuring directory exists:", error);
  }
};

const ImageUploadComponent = ({ onImageUpload, onImageDelete }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, []);

  const selectImage = async (useLibrary) => {
    let result;
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
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
      saveImage(result.assets[0].uri);
    }
  };

  const saveImage = async (uri) => {
    await ensureDirExists();
    const filename = new Date().getTime() + ".png";
    const dest = imgDir + filename;
    deleteImage(); // delete the previous image

    await FileSystem.copyAsync({ from: uri, to: dest });
    onImageUpload();

    setImage(dest);
  };
  const loadImages = async () => {
    try {
      await ensureDirExists();
      const files = await FileSystem.readDirectoryAsync(imgDir);
      console.log(files.length);

      if (files.length > 1) {
        // Delete all images except the first one (keep the most recent)
        for (let i = 1; i < files.length; i++) {
          const fileToDelete = imgDir + files[i];
          await FileSystem.deleteAsync(fileToDelete);
        }
      }

      if (files.length > 0) {
        setImage(imgDir + files[0]);
      }
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  const deleteImage = async () => {
    if (image) {
      await FileSystem.deleteAsync(image);
      onImageDelete();
      setImage(null);
    }
  };

  return (
    <SafeAreaView style={(flex = 1)}>
      <View style={{ alignItems: "center" }}>
        {!image && (
          <Text style={global_text_styles.regular}>
            Upload a Profile Picture
          </Text>
        )}

        <View style={{ alignItems: "center" }}>
          {image ? ( // Check if image exists
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Image source={defaultProfilePicture} style={styles.image} /> // Display default image
          )}

          {image && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 5,
              }}
            >
              <Ionicons.Button
                name="trash"
                onPress={() => deleteImage()}
                iconStyle={styles.icon}
                size={24}
              />
            </View>
          )}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: screenHeight * 0.01,
        }}
      >
        <FontAwesome.Button
          name="photo"
          onPress={() => selectImage(true)}
          iconStyle={styles.icon}
          size={24}
        />
        <FontAwesome.Button
          name="camera"
          onPress={() => selectImage(false)}
          iconStyle={styles.icon}
          size={24}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageUploadComponent;

const styles = {
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.6,
    height: screenWidth * 0.6,
    margin: 5,
    borderWidth: 10,
    backgroundColor: "lightblue",
  },

  trashIcon: {
    alignSelf: "center",
  },
  iconButton: {
    backgroundColor: "white",
    alignSelf: "center",
  },
  icon: {
    marginRight: 0,
  },
  profilePictureButtonContainer: {
    alignSelf: "center",
  },
};
