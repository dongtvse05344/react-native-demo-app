import React, {useContext,useState,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {gobalStateContext} from './../App';

export default MessageBox = ({}) => {
    const state = useContext(gobalStateContext);
    const [name, setName] = useState(state.gobalState.name);
    useEffect(() => {
        setName(state.gobalState.name);
    })
    return(
        <View style={styles.box}>
            <Text>{name}</Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    box: {
        height: 20,
        margin: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        borderWidth: 1,
        borderColor: '#898989'
    }
})