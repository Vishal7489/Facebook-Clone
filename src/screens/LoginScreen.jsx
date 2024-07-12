import {View,StyleSheet,Image,TextInput} from "react-native"
import VectorIcon from "../utils/VectorIcon"
import logo from "../assests/logo.png"
import React,{useState} from "react"


const LogicScreen=()=>{

const [email,setEmail]=useState();

return(
<View style={styles.container}>
<VectorIcon name="arrow-back" type="Ionicons" size={20} color="black"/> 

<View style={styles.red}>
<Image source={logo} style={styles.blue}/> 
<TextInput placeholder='Mobile no or email' value={email} onChangeText={setEmail} style={styles.black}/>

</View>
</View>
    )
}

const styles=StyleSheet.create({
red:{
marginTop:60,
},
blue:{
height:40,
width:50,
},
black:{
borderColor:borderblack,  
}


})

export default LogicScreen