// FirstScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FirstScreen = ({ navigation }) => {
  const handleBookNow = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/planea.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleBookNow}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  buttonContainer: {
    backgroundColor: '#23689B',
    borderRadius: 10,
    position: 'absolute',
    bottom: 70,
    width: 200,
    padding:10,
    alignItems: 'center',
    zIndex: 1, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    /*fontWeight:700*/
    

  },
});


export default FirstScreen;
