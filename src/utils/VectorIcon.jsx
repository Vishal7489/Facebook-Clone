
import {View} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';




const VectorIcon=(props)=>{

const {name,size,color,type,onPress,style}=props;

 return(
<View style={style}>
{type==="MaterialCommunityIcons"?(
<MaterialCommunityIcons name={name} size={size} type={type} onPress={onPress} color={color}/>
):type==="FontAwesome"?(
  <FontAwesome name={name} size={size} type={type} onPress={onPress}color={color} />
)
:type==="Entypo"?(
  <Entypo name={name} size={size} type={type} onPress={onPress} color={color}/>
)
:type==="FontAwesome5"?(
  <FontAwesome5 name={name} size={size} type={type} onPress={onPress} color={color} />
)
:type==="Feather"?(
  <Feather name={name} size={size} type={type} onPress={onPress} color={color} />
)
:type==="AntDesign"?(
  <AntDesign name={name} size={size} type={type} onPress={onPress} color={color} />
)
:
(
  <MaterialIcons name={name} size={size} type={type} onPress={onPress} color={color}/> 
)}
</View>
);
};

export default VectorIcon