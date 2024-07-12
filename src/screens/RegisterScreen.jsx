import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert} from "react-native";
import meta from "../assests/meta.png";
import logo from "../assests/logo.png";
import React,{useState} from "react"
import VectorIcon from "../utils/VectorIcon"
import auth from '@react-native-firebase/auth';






const RegisterScreen=({navigation})=>{

const [email,setEmail]=useState();
const [Password,setPassword]=useState();
const [FullName,setFullName]=useState();
const [ConfirmPassword,setConfirmPassword]=useState();

const onCreateAccount=()=>{
    navigation.navigate('LoginScreen');
};
const onBackIcon=()=>{
    navigation.navigate('LoginScreen');
}

const onRegister = () => {

if (Password !== ConfirmPassword) {
    Alert.alert("Password don't match.");
    return;
  }
  if (email && Password) {
    auth()
    .createUserWithEmailAndPassword(email, Password)
    .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  } else {
    Alert.alert('Please fill in details!');
  }


  
}










    return(
       <View>
        <TouchableOpacity onPress={onBackIcon}>
        <VectorIcon name="arrow-back" type="Ionicons" size={20} color="black"/> 
        </TouchableOpacity>
        <View style={styles.red}>     
        <Image source={logo} style={styles.blue}/> 
        <TextInput placeholder='FullName' value={FullName} onChangeText={setFullName} style={styles.black}/>
        <TextInput placeholder='Mobile number or email' value={email} onChangeText={setEmail} style={styles.black}/>
        <TextInput placeholder='Password' value={Password} onChangeText={setPassword} style={styles.black}/>
        <TextInput placeholder='Confirm Password' value={ConfirmPassword} onChangeText={setConfirmPassword} style={styles.black}/>
    
        <TouchableOpacity style={styles.green} onPress={onRegister} >
        <Text style={styles.log} >Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.account}  onPress={onCreateAccount}>
        <Text style={styles.text} >Already have an account?</Text>
        </TouchableOpacity>
        
        <Image source={meta} style={styles.meta}/>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    red:{
    marginTop:150,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:"20%",
    },
    
    blue:{
    height:40,
    width:50,
    marginBottom:50,
    },
    black:{
    borderColor:'grey',
    borderWidth:1,
    padding:10,
    borderRadius:12,
    width:"95%",
    margin:12,
    },
    green:{
    backgroundColor:'blue', 
    padding:10,
    borderRadius:20,
    width:'95%',
    alignItems:'center',
    marginTop:10,
    },
    log:{
    color:'white',
    fontSize:15,
    fontWeight:'500',
    },
    forgot:{
    color:'grey',
    fontSize:14,
    fontWeight:'400',
    marginTop:15,
    },
    account:{
    borderColor:'blue',
    borderWidth:1,
    padding:10,
    borderRadius:10,
    width:"95%",
    alignItems:'center',
    marginTop:'35%',
    },
    text:{
    color:'blue',
    fontSize:20,
    fontWeight:'400',
    },
   


})
export default RegisterScreen