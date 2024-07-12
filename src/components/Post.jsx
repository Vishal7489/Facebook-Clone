import {View,StyleSheet,Image} from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter"
import {PostData} from "../data/PostData.js"


const Post=()=>{
return(
<View>
{PostData.map( item=>(
<>
<PostHeader data={item}/>
<Image source={item.PostImg} style={styles.postImage}/>
<PostFooter data={item}/>
</>
))}

</View>  
)
}

const styles=StyleSheet.create({
postImage:{
height:300,
width:420,
marginTop:8,
}
})





export default Post

