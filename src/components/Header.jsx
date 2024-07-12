import {View,Text,Image,StyleSheet} from "react-native";
import React from "react";
import facebook from "../assests/facebook.png"
import Messanger from "../assests/Messanger.png"
import SearchIcon from "../assests/SearchIcon.jpg"


const Header=()=>{
 return(
<View style={styles.header}>
<Image source={facebook} style={styles.facebook}/>
<Image source={SearchIcon} style={styles.Search}/>
<Image source={Messanger} style={styles.Messanger}/>
</View>
)
}

const styles=StyleSheet.create({
facebook:{
height:35,
width:200,
},
Search:{
height:30,
width:30,
color:'grey',
marginTop:8,
marginLeft:55,
},

Messanger:{
height:30,
width:27,
color:'grey',
marginTop:8,
},
header:{
flexDirection:'row',
justifyContent:'space-between',
marginTop:20,
}

})


export default Header