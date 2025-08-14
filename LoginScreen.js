import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Validation', 'Please enter email and password.');
      return;
    }
    // replace with real auth later
    onLogin({ email, remember });
  };

  return (
    <LinearGradient
      colors={['#e8f4ff', '#e6fff4']} // soft blue -> soft teal background
      style={styles.container}
    >
      <Text style={styles.logo}>COGNIFY</Text>
      <Text style={styles.title}>Welcome to Cognify</Text>
      <Text style={styles.subtitle}>Smart glasses companion for caregivers</Text>

      <View style={styles.form}>
        <Text style={styles.signIn}>Sign In</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          placeholderTextColor="#8b9db0"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#8b9db0"
        />

        <View style={styles.row}>
          {/* space added via checkbox style and remember text margin */}
          <Checkbox
            style={styles.checkbox}
            value={remember}
            onValueChange={setRemember}
            color={remember ? '#1E90FF' : undefined} // blue when checked
          />
          <Text style={styles.remember}>Remember me</Text>

          <TouchableOpacity style={{ marginLeft: 'auto' }}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonWrapper}
          activeOpacity={0.85}
          onPress={handleLogin}
        >
          <LinearGradient
            colors={['#1E90FF', '#00C2A8']} // button gradient (blue -> teal)
            style={styles.button}
            start={[0, 0]}
            end={[1, 0]}
          >
            <Text style={styles.buttonText}>Sign In →</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Your data is encrypted and secure. By continuing, you agree to our
          Terms of Service and Privacy Policy.
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: { fontSize: 22, fontWeight: '700', color: '#0e5aa7', marginBottom: 6 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 2 },
  subtitle: { fontSize: 12, color: '#555', marginBottom: 18 },

  form: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 20,
    ...Platform.select({
      android: { elevation: 4 },
      ios: { shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
    }),
  },
  signIn: { fontSize: 18, fontWeight: '700', marginBottom: 12 },

  label: { fontSize: 12, color: '#555', marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#e3e8ef',
    padding: 12,
    borderRadius: 10,
    marginBottom: 14,
  },

  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },

  checkbox: { width: 20, height: 20, marginRight: 10, borderRadius: 4 },

  remember: { fontSize: 13, color: '#333' },

  forgot: { fontSize: 12, color: '#1976d2' },

  buttonWrapper: { marginTop: 4, borderRadius: 10, overflow: 'hidden' },
  button: { paddingVertical: 14, alignItems: 'center', borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: '700' },

  footer: { fontSize: 10, color: '#777', marginTop: 14, textAlign: 'center' },
});
