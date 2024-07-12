import {View,Text,Image,StyleSheet} from "react-native";
import React from "react";
import Profile from "../assests/ProfileImage.png"
import VectorIcon from "../utils/VectorIcon.jsx"


const CreateStory=()=>{
return(
<View style={styles.createStoryContainer}>
<Image source={Profile} style={styles.Profile}/> 
<View style={styles.iconContainer}>
<VectorIcon name='circle-with-plus' type='Entypo' size={35} style={styles.VectorIcon}/>  
</View>
<Text style={styles.createStory}>Create Story</Text>  
</View> 
)
}

const styles=StyleSheet.create({
Profile:{
},
VectorIcon:{
color:'blue',
position:'relative',
bottom:25,
},
createStoryContainer:{
borderColor:'black',
borderWidth:1,
borderRadius:10,
alignItems:'center',
borderTopLeftRadius:10,
borderTopRightRadius:10,
position:'relative',
height:180,
},
iconContainer:{
position:'absolute',
top:120,
backgroundColor:'white',
borderRadius:50,
},
createStory:{
fontSize:14,
color:'black',
textAlign:'center',
marginTop:25,
width:'70%',
position:'relative',
bottom:5,

}
})



export default CreateStory