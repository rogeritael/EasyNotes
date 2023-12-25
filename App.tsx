import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Main } from './src/views/Main';

export default function App() {

  return (
    <View style={{
      backgroundColor: '#333',
      height: '100%',
    }}>
      <StatusBar style='inverted' backgroundColor='#333' />
      <Main />
    </View>
  );
}