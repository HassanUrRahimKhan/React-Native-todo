import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

const Flex = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.one}>Box 1</Text>
      <Text style={styles.two}>Box 2</Text>
      <Text style={styles.three}>Box 3</Text>
      <Text style={styles.four}>Box 4</Text>
     

    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
    container:{
        
        
        flexDirection:'row',
        paddingTop:40,
        backgroundColor:"#c4a09d",
        alignItems:'flex-end',
       justifyContent:'space-around',
      

        

    },
    one:{
        
        flex: 2,
        padding: 10,
        backgroundColor: 'coral',
    },
    two:{
        flex: 4,
        padding: 20,
        backgroundColor: 'violet',
    },
    three:{
        flex: 3,
        padding: 30,
        backgroundColor: 'green',
    },
    four:{
        flex: 5,
        padding: 40,
        backgroundColor: 'teal',
    },
    five:{
        padding: 50,
        backgroundColor: '#ddd',
    }
})