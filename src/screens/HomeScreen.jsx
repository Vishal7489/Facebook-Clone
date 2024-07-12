import {View,Text,ScrollView,StyleSheet} from "react-native";
import React from "react";
import SubHeader from "../components/SubHeader"
import Stories from "../components/Stories"
import Post from "../components/Post.jsx"




const HomeScreen=()=>{
 return(
<ScrollView style={styles.homeContainer}>
<View>
<SubHeader/>
<Stories/>
<Post/>
</View>
</ScrollView>   
)
}

const styles=StyleSheet.create({
 backgroundColor:'black',  
})


export default HomeScreen
