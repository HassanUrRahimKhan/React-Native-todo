import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from "./Components/Todo"
import Header from "./Components/Header"
import Flex from './Components/Flex';

export default function App() {
  return (
    <View >
        {/* <Flex></Flex> */}
      <Header></Header>
      <Todo ></Todo>
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 

  },

});
