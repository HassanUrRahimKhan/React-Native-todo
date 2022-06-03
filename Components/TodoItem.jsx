import React from 'react';
import { TouchableOpacity,Text, StyleSheet } from 'react-native';

const TodoItem = ({item,pressHandler}) => {
  return (
   <TouchableOpacity onPress={()=> pressHandler(item.item.key)}>
       <Text style={styles.item}>{item.item.text}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
 item:{
     padding: 16,
     marginTop: 16,
     borderColor: '#bbb',
     borderWidth:1,
     borderStyle: "dashed",
     borderRadius:10,
     width:150
 }
})
export default TodoItem