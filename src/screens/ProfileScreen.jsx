import {View,Text,StyleSheet,TouchableOpacity,Alert} from "react-native"
import React from "react"
import auth from '@react-native-firebase/auth';

const ProfileScreen=()=>{


const onLogout = () => {
auth()
.signOut()
.then(() => Alert.alert('User signed out!'))
.catch(error => console.log('error :', error));
};



return(
<View style={styles.container}>
<Text style={styles.text}>ProfileScreen</Text>  
<TouchableOpacity onPress={onLogout} >
<Text style={styles.text1}>Logout</Text> 
</TouchableOpacity>
</View>
)
}

const styles=StyleSheet.create({
container:{
flex:1,
alignItems:'center',
justifyContent:'space-between',
},
text1:{
fontSize:22,
color:'white',
fontWeight:'500',
borderRadius:20,
width:350,
marginBottom:60,
borderColor:'grey',
borderWidth:2,
textAlign:'center',
height:45,
backgroundColor:'blue',
alignItems:'center',
paddingTop:3,
},
text:{
color:'blue',
fontSize:22,
fontWeight:'500',
marginLeft:10,

}
})

export default ProfileScreen