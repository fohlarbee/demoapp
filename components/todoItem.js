import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function TodoItem({item, presHandler}){
    return(
        <TouchableOpacity onPress={() => presHandler(item.key)}>
            <View style = {styles.text}>
                <AntDesign name="delete" size={24} color="#333" />
                <Text style ={styles.itemText}>{item.text}</Text>
            </View>
             
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    text:{
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderRadius:10,
        borderStyle:"dashed",
        flexDirection:"row",
    },
    itemText:{
        marginLeft:12,
        fontSize:30
    }
});