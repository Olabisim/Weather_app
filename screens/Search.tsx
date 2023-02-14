

import * as React from 'react';
import {TextInput, Button, Card} from 'react-native-paper'
import {View, Text, FlatList} from 'react-native'
import { Header } from './Header';

export const Search = () => {

        const [city, setCity] = React.useState('')
        const [cities, setCities] = React.useState([])

        const fetchCities = (text) => {
                setCity(text)
                fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(item => item.json())
                .then(cityData => {
                        console.log("entered the city data")
                        console.log("cityData")
                        console.log(cityData)
                        setCities(cityData.filter( each => each.title.includes(text)).slice(0,9))
                        console.log("cityData.filter( each => each.title.includes(text)).slice(0,9)")
                        console.log(cityData.filter( each => each.title.includes(text)).slice(0,9))
                })
        }


        return (
                <View style={{flex: 1}}>
                        <Header name="Search Screen" />
                        <TextInput label="city name" theme={{ colors: {primary: "#00aaff"}}} 
                                        value={city} onChangeText={(text) => fetchCities(text)}
                        />
                        <Button
                                icon="content-save"
                                mode="contained"
                                theme={{colors: {primary: "#00aaff"}}}
                                style={{margin: 20}}
                                onPress={() => console.log("Pressed")}
                        >
                                <Text style={{color: 'white'}}>Press me</Text>
                        </Button>
                        {/* <Text>Search screen</Text> */}
                        <FlatList 
                                data={cities}
                                renderItem={({item}) => {
                                        return (
                                                <Card
                                                        style={{margin: 2, padding: 12}}
                                                >
                                                        <Text>{item.title}</Text>
                                                </Card>
                                        )
                                }}
                                keyExtractor={item=> item.id}
                        />
                </View>
        )
}