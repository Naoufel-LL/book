import { View, Text , ScrollView,Image , TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const MovieScreen = ({navigation,route}) => {
    const data = route.params.data
    navigation.setOptions({ title: ""})
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
    });
  return (
    <ScrollView>
      <Image src={data.poster} style={{width:'100%',height:600}}></Image>
      <View style={{padding:10,top:-20,backgroundColor:"white",borderRadius:20,height:'100%'}}>
      <Text style={{fontSize:16,paddingBottom:4,color:"grey"}}> {data.released}   | 2h35min |  {data.cat}  </Text>
        <Text style={{fontSize:40,fontWeight:800,paddingBottom:9}}>{data.movie_name}</Text>
        <Text style={{fontSize:18,paddingBottom:10}}><Text style={{fontSize:16,paddingBottom:4}}>⭐⭐⭐⭐</Text> {data.rating}</Text>
        <Text style={{fontSize:16,paddingBottom:4}}>Description : {data.description}</Text>
        <Text style={{fontSize:16,paddingBottom:4}}>Actors : {data.actors}</Text>
        <Text style={{fontSize:16,paddingBottom:4}}>Directed By : {data.directed}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("BuyTicket",{data:data})}>
        <Text style={styles.buttonText}>Buy Ticket <Ionicons name="film" size={20} /> </Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#23689B',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 30,
    paddingLeft: 90,
    paddingRight: 90
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
export default MovieScreen