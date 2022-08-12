 import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList, Button, TextInput, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
// import Header from "./components/header";
// import TodoItem from './components/todoItem';
// import AddTodo from './components/addTodo';


export default function App(){

  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [status, setStatus] = useState(false);

  const TaxCalculator = () =>{
    const profit = revenue - expenses;
    const cit = (20/100) * revenue;
    const vat = (7.5/100) * profit;
    const total = cit + vat;

    return(
        <View style = {styles.summary}>
            <Text style={styles.summaryLine}> Your Revenue: {revenue}</Text>
            <Text style={styles.summaryLine}> Your Expenses: {expenses}</Text>
            <Text style={styles.summaryLine}> Your Profit: {profit}</Text>
            <Text style={styles.summaryLine}> CIT Tax: {cit}</Text>
            <Text style={styles.summaryLine}> VAT Tax: {vat}</Text>
            <Text style={styles.summaryLine}> Total Tax to Pay: {total}</Text>
        </View>   
    )

  }
  return(
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dismissed");
    }}>
      <View style = {styles.container}>
          <View style={styles.logoWrapper}>
            <Image source={require("./assets/images/firs_image.jpg")} style={styles.logo}/>
            <Text style={styles.heading}>Company Tax Calculator</Text>
          </View>

          
          {status === true ? TaxCalculator (): null}
          <TextInput style ={styles.input}
          placeholder="Total Revenue" 
          onChangeText={(revenueInput) => setRevenue(revenueInput)}
          />
          <TextInput style ={styles.input}
          placeholder="Total Expenses" 
          onChangeText={(expensesInput) => setExpenses(expensesInput)}
          />

          <Button title='CALCULATE TAX' onPress={() => {
            TaxCalculator;
            setStatus(true);
            }}/>

          <StatusBar style ="auto"/>
      </View>
    </TouchableWithoutFeedback>

  )
}
// export default function App() {
//   const[todos, setTodos] = useState([
//     {text:"buy coffe", key:"1"},
//     {text:"create an app", key:"2"},
//     {text:"get a pet", key:"3"}
//   ]);

//   const presHandler = (key) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter(todo => todo.key != key)
//     });

//   }
//   const submitHandler = (text) => {
//     if(text.length > 3) {
//       setTodos((prevTodos) => {
//         return [
//           {text: text, key: Math.random().toString()},
//           ...prevTodos
//         ]
//       })
//     }
//     else {
//       Alert.alert("Opps!", "Todos must be at least 3 chars long", [
//         {text:"UNDERSTOOD", onPress:() => console.log("alert closed")}
//       ]);
//     }
   
//   }
//   return (
//     <TouchableWithoutFeedback onPress={() => {
//       Keyboard.dismiss();
//       console.log("dismmissed keyboard");
//     }}> 
//         <View style={styles.container}>
//             <Header/>
//             <View style = {styles.content}>
//               <AddTodo submitHandler={submitHandler}/>
//                 <View style = {styles.list}>
//                     <FlatList
//                       data={todos}
//                       renderItem={({item}) => (
//                           <TodoItem item={item} presHandler={presHandler}/>
//                       )}
//                     />
//                 </View>
//             </View>
          
//         </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
  
//   },
//   content: {
//     flex:1,
//     padding:40
//   },
//   list:{
//     flex:1,
//     marginTop:20
//   }
// });


// import { StatusBar } from 'expo-status-bar';

{/* <StatusBar style="auto" /> */}


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:"#fff"

  },
  input :{
    paddingVertical:14,
    paddingHorizontal:20,
    borderBottomWidth:1,
    borderBottomColor:"#ddd",
    marginVertical:5
    // borderRadius:50

  },
  logo:{
    width:80,
    height:80,
    borderRadius:50
  },
  logoWrapper:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },
  heading:{
    fontSize:20
  }
});