import {View,Text,StyleSheet,Image} from "react-native";
import React from "react";
import {StoryData} from '../data/StoryData.js';




const FriendStories = () => {
    return (
      <>
        {StoryData.map((item) => (
          <View style={styles.FriendStoryContainer} key={item.id}>
          <Image source={item.profileImg} style={styles.Cartoon} />
          <Image source={item.storyImg} style={styles.Cartoon1} />
          <Text style={styles.James}>{item.name}</Text>
          </View>
        ))}
      </>
    );
  }

const styles=StyleSheet.create({
Cartoon:{
height:200,
width:110,
borderRadius:10,
},
FriendStoryContainer:{
borderWidth:1,
borderColor:'grey',
borderRadius:10,
marginLeft:5,
height:150,
},
Cartoon1:{
height:40,
width:40,
position:'relative',
bottom:190,  
left:5,
},
James:{
position:'realtive',
bottom:80,
color:'white',
left:20,
fontSize:14,


}





})


export default FriendStories