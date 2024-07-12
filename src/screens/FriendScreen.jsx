import {View,Text,StyleSheet} from "react-native"
import React from "react"

const FriendScreen=()=>{
return(
<View style={styles.container}>
<Text style={styles.text}>FriendScreen</Text> 
</View>
)
}

const styles=StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
},
text:{
  fontSize:22,
  color:'blue',
  fontWeight:'500',

}
})

export default FriendScreen