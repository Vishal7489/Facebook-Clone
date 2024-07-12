import {View,Text,Image,StyleSheet} from "react-native";
import React from "react";
import Like from "../assests/LikeIcon.png"
import Heart from "../assests/HeartIcon.png"
import Shock from "../assests/ShockIcon.png"
import VectorIcon from "../utils/VectorIcon.jsx"





const PostFooter=({data})=>{
return(


<View style={styles.postFooterContainer}>
<View style={styles.footerReaction}>
<View style={styles.row}>
<Image source={Like}  style={styles.Like}/>
<Image source={Heart} style={styles.Heart}/>
<Image source={Shock} style={styles.Shock}/>
<Text style={styles.text}>{data.reactionCount}</Text>
</View> 
<Text style={styles.Comments}>{data.comments}</Text>
</View>

<View style={styles.footerVector}>


<View style={styles.row2}>
<VectorIcon name='like2'
type='AntDesign'
size={25}/>  
<Text style={styles.Comment}>Like</Text>
</View>


<View style={styles.row2}>
<VectorIcon 
name='chat' 
type='MaterialCommunityIcons'
size={25}/> 
<Text style={styles.Comment}>Comments</Text>
</View>


<View style={styles.row2}>
<VectorIcon 
  name='share'
  type='MaterialCommunityIcons'
  size={25}
  style={styles.share}
  /> 
<Text style={styles.Comment}>Share</Text>
</View>

</View>

</View> 
)
}

const styles=StyleSheet.create({
Like:{
height:20,
width:20,  
},
Heart:{
height:20,
width:20,  
},
Shock:{
height:20,
width:20,
},
row:{
flexDirection:'row',
},
postFooterContainer:{
padding:16,
},
text:{
color:'grey',
fontSize:14,
paddingLeft:5,
},
footerReaction:{
flexDirection:'row', 
justifyContent:'space-between',
borderBottomWidth:1,
borderBottomColor:'lightgrey',
marginVertical:15,

},
footerVector:{
flexDirection:'row', 
justifyContent:'space-around',
borderBottomWidth:1,
borderBottomColor:'lightgrey', 
},
row2:{
flexDirection:'row',
},
Comment:{
  
  position:'realtive',
  top:4,
  left:2,
  color:'black',

}



})


export default PostFooter