import {View,Text,StyleSheet,ScrollView,Image} from "react-native";
import React from "react";
import CreateStory from "./CreateStory.jsx"
import FriendStories from "./FriendStories.jsx"


const Stories=()=>{
return(
<ScrollView horizontal style={styles.stories}  contentContainerStyle={styles.contentContainerStyle} 
showsHorizontalScrollIndicator={false}
>
<CreateStory/>
<FriendStories/>
</ScrollView>
)
}
const styles=StyleSheet.create({
stories:{
backgroundColor:'white',
marginTop:5,
padding:15,
},
contentContainerStyle:{
padding:30,
},





})



export default Stories