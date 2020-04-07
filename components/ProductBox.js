import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ProductBox extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <View style={styles.box}>
               <Text> {this.props.item.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 150,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#868686',
        borderWidth: 1,
        margin: 5,
    }
})