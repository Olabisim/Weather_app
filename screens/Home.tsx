import React, { useEffect, useState} from 'react';
import {TextInput, Button, Card, Title} from 'react-native-paper';
import {View, Text, FlatList, Image} from 'react-native';
import {Header} from './Header'

interface interfaceInfo {
        name: string,
        temp: string,
        humidity: string,
        desc: string,
        icon: string
}

export const Home = ():JSX.Element => {
        const [info, setInfo] = useState<interfaceInfo>({
                name: "loading !!",
                temp: "loading",
                humidity: "loading",
                desc: "loading",
                icon: "loading"
        })

        useEffect(() => {
                getWeather()
        }, [])

        const getWeather = () => {
                fetch('https://api.openweathermap.org/data/2.5/weather?q=london&APPID=2cbf18c8064349a7912d29d574da32eb&units=metric')
                .then(data => data.json())
                .then(results => {
                        setInfo({
                                name: results.name,
                                temp: results.main.temp,
                                humidity: results.main.humidity,
                                desc: results.weather[0].description,
                                icon: results.weather[0].icon,
                        })
                })
        }

        return (
                <View style={{flex: 1}}>
                        <Header name="Weather App" />
                        <View>
                                <Title
                                        style={{
                                                color: '#00aaff',
                                                marginTop: 30,
                                                fontSize: 30
                                        }}
                                >
                                        {info.name}
                                </Title>

                                <Image 
                                        style={{
                                                width: 120,
                                                height: 120
                                        }}
                                        source={{uri: 'https://openweathermap.org/img/w/'+info.icon+ '.png'}}
                                />
                        </View>

                        <Card style={{
                                margin: 5,
                                padding: 12
                        }}>
                                <Title
                                        style={{color:"#00aaff"}}
                                >
                                        Temperature - {info.temp}
                                </Title>
                        </Card>
                        <Card style={{
                                margin: 5,
                                padding: 12
                        }}>
                                <Title
                                        style={{color:"#00aaff"}}
                                >
                                        Humidity - {info.humidity}
                                </Title>
                        </Card>
                        <Card style={{
                                margin: 5,
                                padding: 12
                        }}>
                                <Title
                                        style={{color:"#00aaff"}}
                                >
                                        Description - {info.desc}
                                </Title>
                        </Card>
                </View>
        )
}