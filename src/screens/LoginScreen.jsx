import {View,StyleSheet,Image,TextInput,TouchableOpacity,Text,Alert} from "react-native"
import VectorIcon from "../utils/VectorIcon"
import logo from "../assests/logo.png"
import React,{useState} from "react"
import meta from "../assests/meta.png"
import auth from '@react-native-firebase/auth';







const LoginScreen=({navigation})=>{

const [email,setEmail]=useState();
const [Password,setPassword]=useState();

const onCreateAccount=()=>{
    navigation.navigate('RegisterScreen');
}
const onBackIcon=()=>{
    navigation.navigate('RegisterScreen');
};


const onLoginScreen=()=>{
    //navigation.navigate('MainScreen');
if (email && Password) {
auth()
.signInWithEmailAndPassword(email, Password)
.then(response => {
 console.log('response :', response);
})
.catch(error => {
 if (error.code === 'auth/wrong-Password') {
Alert.alert('Your password is wrong!');
 } else {
Alert.alert(`${error}`);
}
 console.log('error :', error);
});
}




}



return(
<View style={styles.container}>
<TouchableOpacity onPress={onBackIcon}>
<VectorIcon name="arrow-back" type="Ionicons" size={20} color="black"/> 
</TouchableOpacity>

<View style={styles.red}>
<Image source={logo} style={styles.blue}/> 
<TextInput placeholder='Mobile number or email' value={email} onChangeText={setEmail} style={styles.black}/>
<TextInput placeholder='Password' value={Password} onChangeText={setPassword} style={styles.black}/>
<TouchableOpacity style={styles.green}  onPress={onLoginScreen} >
<Text style={styles.log}>Log in</Text>
</TouchableOpacity>
<Text style={styles.forgot}>Forgot Password?</Text>
<TouchableOpacity style={styles.account}  >
<Text style={styles.text} onPress={onCreateAccount}>Create new account</Text>
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
meta:{

}

})

export default LoginScreen