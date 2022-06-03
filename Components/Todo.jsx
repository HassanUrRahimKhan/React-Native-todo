import {React,useState} from 'react';
import {View,Text, TextInput,StyleSheet, Button,TouchableOpacity, FlatList,Alert,TouchableWithoutFeedback, Keyboard} from "react-native";
import TodoItem from "./TodoItem"


const Todo = () => {
    const [item,setItem] = useState([
        {text:"buy coffee", key:"1"},
        {text:"quiz preparation", key:"2"},
        {text:"palying piano", key:"3"},

    ])

    const [text,setText] = useState("");

    const changeHandler = (val) =>{
            setText(val) 
    }

  
    const pressHandler = (key) =>{
        setItem((prev)=>{
            return prev.filter(todo=> todo.key !=key)
        })
    }

  


    const addItem = (text) =>{
        if(text.length>0){
      setItem((prev)=>{
            return [{text:text,key:Math.random().toString()},...prev]
      })}
      else{
        Alert.alert(
            "OOPS!",
            "Empty Todo",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
      }

     
    }
  return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
   <View style={styles.container}>

      
    <View >
        <TextInput style={styles.input} placeholder="Enter item here" 
        onChangeText={changeHandler}  
         ></TextInput>
    </View>

    <View style={styles.btn}> 
      <Button title='Add Item' onPress={()=> {addItem(text)} }></Button> 
        <FlatList 
            data={item}
            renderItem={(item)=>(
                <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
                )}
           
            
        />



    </View>
   </View>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems:'center',
        marginTop:20,

    },
    input:{
        borderWidth: 2,
        borderColor: "#777",
        padding: 6,
        margin: 10,
        width: 150,
        
        
    },
    btn:{
        width: 150,
        justifyContent:'center',
      
        

    }
  
   
})

export default Todo