import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

const TimelineScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }

    if (pickerResult.assets.length > 0) {
      setSelectedImage(pickerResult.assets[0].uri);
    }
  };

  const postToTimeline = async () => {
    if (!selectedImage || !comment) {
      alert('Please select an image and write a comment.');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      
      // Obter cidade e estado com base nas coordenadas
      const cityStateInfo = await Location.reverseGeocodeAsync({ latitude, longitude });
      const city = cityStateInfo[0].city;
      const state = cityStateInfo[0].region;

      const newPost = {
        image: selectedImage,
        comment: comment,
        location: `${city}, ${state}`
      };

      setPosts([newPost, ...posts]);
      setSelectedImage(null);
      setComment('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.fixedContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
          <Text style={styles.imageButtonText}>Pick an Image</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={comment}
          onChangeText={setComment}
        />
        <Button title="Post" onPress={postToTimeline} />
      </View>

      {posts.map((post, index) => (
        <View key={index} style={styles.post}>
          <Image source={{ uri: post.image }} style={styles.postImage} />
          <Text style={styles.comment}>{post.comment}</Text>
          <Text style={styles.location}>{post.location}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingVertical: 20,
  },
  fixedContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  imageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 20,
  },
  imageButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  location: {
    marginTop: 10,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  post: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  comment: {
    marginBottom: 10,
  },
});

export default TimelineScreen;
