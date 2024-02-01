import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image,TextInput } from "react-native";
import { auth, db, storage } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore"; // Import only the necessary functions
import { query, where, onSnapshot ,orderBy } from "firebase/firestore";
import { useState,useLayoutEffect } from "react";
const Home = ({navigation}) => {
  const [movies,setMovies]=useState([])
  const [focused, setFocused] = useState(false);
  const [search,SetSearch] = useState('')
  useLayoutEffect(()=>{
    setMovies([])
    const list = []
    const q = query(collection(db, "movies"))
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
 querySnapshot.forEach((doc) => {
  const {
    movie_name,
        description,
        actors,
        liked,
        poster,
        released,
        directed,
        rating,
        cat
  } = doc.data();
  list.push({
    movie_name:movie_name,
    description:description,
    actors:actors,
    liked:liked,
    poster:poster,
    released:released,
    directed:directed,
    rating:rating,
    cat:cat
  });
 });
 setMovies(list)
 console.log(movies)
});
  },[])
  const add = async () => {
    try {
      const docRef = await addDoc(collection(db, "movies"), {
        movie_name:"FERRARI",
        description:"Ferrari is set during the summer of 1957. Behind the spectacle and danger of 1950's Formula 1, ex-racer, Enzo Ferrari, is in crisis. Bankruptcy stalks the company he and his wife, Laura, built from nothing ten years earlier. Their tempestuous marriage struggles with the mourning for their one son. Ferrari struggles with the acknowledgement of another",
        actors:"Adam Driver, Penélope Cruz, Shailene Woodley, Sarah Gadon",
        liked:"94%",
        released:"2024",
        directed:"Michael Mann",
        cat:"Sport",
        rating:"9.5",
        poster:"https://resizing.flixster.com/GQjg1rskIV2km5sd7JdFNB4pfnk=/fit-in/180x240/v2/https://resizing.flixster.com/i9CeWWf69GItCAWYaYws0z92NSs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFiM2FmYWMxLWIyMDEtNDQ3OC04YjU4LWYxNDg4N2MyOWI0YS5qcGc=",
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("Product Added");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  let filtred_movies = movies.filter((data)=>{
    let movie_name = data.movie_name.toUpperCase();
    let search_name = search.toLocaleUpperCase()
    return movie_name.indexOf(search_name) != -1
  })
  return (
    <ScrollView style={{marginVertical:40}}>
      <TouchableOpacity style={styles.button} onPress={add}>
        <Text style={styles.buttonText}>Add Movie</Text>
      </TouchableOpacity>
      <ScrollView>
              <View style={{justifyContent:'center',alignItems:'center'}}>
              <TextInput
        value={search}
        onChangeText={(text)=>SetSearch(text)}
         onFocus={() => setFocused(true)}
         onBlur={() => setFocused(false)}
        style={[
          { 
          padding: 6 * 2,
          fontSize:15,
          backgroundColor: 'white',
          borderRadius: 30,
          marginVertical: 20,width:"90%"},
          focused && {
            borderWidth: 3,
            borderColor: "#23689B",
            shadowOffset: { width: 4, height: 10 },
            shadowColor: "#23689B",
            shadowOpacity: 0.2,
            shadowRadius: 10,
          },
        ]} placeholder="Search">
          </TextInput>
              </View>
             <View style={{justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"row",flexWrap:"wrap",}}>
               {filtred_movies?.map((data)=>{
                   return(
                    <TouchableOpacity style={{width:"50%",padding:10}} onPress={()=>navigation.navigate("MovieScreen",{data:data})}>
                 <Image src={data.poster} style={{width:'100%',height:300}}></Image>
                 <Text>{data.movie_name} ({data.released})</Text>
              </TouchableOpacity>
                   )
               })}       
             </View>
              </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#23689B',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 90,
    paddingRight: 90
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Home;
