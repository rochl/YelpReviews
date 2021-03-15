import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {

    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async(id) => {
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    }

    useEffect(()=> {
        getResult(id)
    },[]);

    if(!result){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
            style={StyleSheet.image} 
            data= {result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => { 
                return <Image style={styles.image} source={{uri:item}} /> 
            }}
            />
            
        </View>
    )
};;

const styles= StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        height:250,
        width:250,
        marginBottom:5
    },
    name: {
        fontSize :15,
        fontWeight:'bold'
    }
})
export default ResultsShowScreen;