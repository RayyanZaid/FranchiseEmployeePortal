import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const HomeScreen = () => {
  const [postContent, setPostContent] = useState("");

  const handlePost = () => {
    // Post the content to the server
  };

  return (
    <View>
      <Text>Welcome, (first name)</Text>
      <Text>account name</Text>
      <TextInput
        placeholder="What's on your mind?"
        value={postContent}
        onChangeText={setPostContent}
      />
      <Button title="Post" onPress={handlePost} />
    </View>
  );
};

export default HomeScreen;
