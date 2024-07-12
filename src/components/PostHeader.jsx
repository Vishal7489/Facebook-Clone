import {View,Text,Image,StyleSheet} from "react-native";
import React from "react";

import VectorIcon from "../utils/VectorIcon.jsx"


const PostHeader=({data})=>{
    return(
<>
<View style={styles.PostHeader}>
<View style={styles.row}>
<Image source={data.PostImg} style={styles.UserImage}/>


<View style={styles.container}>
<View>
<Text style={styles.username}>{data.name}</Text>
</View>
<View style={styles.MainText}>
<Text style={styles.dot}>•</Text>
<Text style={styles.days}>{data.date}</Text>
<VectorIcon
name="user-friends"
type="FontAwesome5"
size={13}
style={styles.UserIcon}
/>
</View>

</View>

<View style={styles.row1}>
<VectorIcon 
name="dots-three-horizontal"
type="Entypo"
size={25}
style={styles.headerIcons}
/>
<VectorIcon 
name="close"
type="Ionicons"
size={25}
/>
</View>
</View>

<Text style={styles.caption}>{data.caption}</Text>
</View>
</>

    )
}


const styles=StyleSheet.create({
UserImage:{
height:40,
width:40,
flexDirection: 'row',
justifyContent: 'space-between',
borderRadius:8,
},

row1:{
flexDirection:'row',
},
row:{
flexDirection: 'row',
justifyContent: 'space-between', 
},
MainText:{
 flexDirection:'row',
},
container:{
position:'relative',
right:110,
},
username:{
color:'black',
fontSize:14,
marginBottom:2,
marginLeft:16,
},
dot:{
fontSize:14, 
color:'black',
paddingHorizontal:3,
marginLeft:10,
},
days:{
 fontSize:14,
 color:'black',

},
UserIcon:{
 marginTop:3,
marginLeft:2,
},
headerIcons:{
 
},
PostHeader:{
marginLeft:10,
},
caption:{
 color:'black', 
 fontSize:15,
 marginTop:10,  
}


})



export default PostHeader;