
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigation.replace('home');
      })
      .catch(error => {
        console.error('Login error:', error.message);
        // Handle specific errors
        if (error.code === 'auth/invalid-email') {
          console.error('Invalid email format');
          // Provide user feedback, e.g., display an error message
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ color: '#000', fontSize: 15, marginTop: 15 }}>
          Don't have an account?{' '}
          <Text onPress={() => navigation.navigate('SignUp')} style={{ color: '#0B60B0', fontSize: 18, marginTop: 40 }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
        left: 0,
      },
      input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 30,
        padding: 10,
        borderRadius: 70,
        color: 'black',
        backgroundColor: '#ECECEC',
      },
      button: {
        backgroundColor: '#0B60B0',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 30,
        paddingLeft: 90,
        paddingRight: 90,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 70,
    backgroundColor: '#ECECEC',
    paddingLeft: 10,
  },
  passwordInput: {
    flex: 1,
    color: 'black',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
  },
  eyeIcon: {
    fontSize: 18,
  },
});

export default Login;

