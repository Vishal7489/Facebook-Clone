import {View,Text,Image,StyleSheet,TextInput} from "react-native";
import React from "react";
import Profile from "../assests/ProfileImage.png"
import CameraRoll from "../assests/Cameraroll.png"

const SubHeader=()=>{
return(
<View style={styles.SubHeader}>
<Image source={Profile} style={styles.Profile} styles={styles.Profile}  />
<View style={styles.inputBox}>
<Text style={styles.inputStyle}>Write something here...</Text>
<Text style={styles.inputStyle}>यहाँ कुछ लिखिए...</Text>
</View>
<Image source={CameraRoll}  style={styles.cameraroll}/>
<Image/>
</View>
)
}

const styles=StyleSheet.create({
    Profile:{
    height:40,
    width:40,
    },
    cameraroll:{
    height:40,
    width:40,
    },
    SubHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:12,
    backgroundColor:'white',

    },
    inputBox:{
     borderWidth:1,
     borderColor:'black',  
     borderRadius:30,
     paddingHorizontal:20,
     width:'70%',
     backgroundColor:'white',
     alignItems:'center',
    },
    inputStyle: {
    fontSize: 16,
    color: 'grey',
      },
})



export default SubHeader