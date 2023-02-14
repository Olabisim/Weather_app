import * as React from 'react';
import { AppbarProps, Appbar } from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';

export const Header = ({name}: {name: string}) => {


        const _goBack = () => {console.log("went back")}
        const _handleSearch = () => {console.log("handle search")}
        const _handleMore = () => {console.log("handle more")}

        return (
                <SafeAreaProvider>
                               
                
                {/* <View> */}
                        

                 <Appbar.Header style={{backgroundColor: '#00aaff', flexDirection: 'row', justifyContent: 'center'}}>
                         <Appbar.BackAction onPress={_goBack}  />
                         <Appbar.Content title={name} style={{flexDirection: 'row', justifyContent: 'center'}} />
                         <Appbar.Action icon="magnify" onPress={_handleSearch} />
                         <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
                 </Appbar.Header>   
                        

                {/* </View> */}
                
                </SafeAreaProvider>
        )
}