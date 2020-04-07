import React, { Component,useContext,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {gobalStateContext} from './../App';


export default PostDetailScreen = ({route, navigation}) => {
    const state = useContext(gobalStateContext);
    const [name, setName] = useState(state.gobalState.name);
    return (
        <View style={styles.screen}>
            <Text>
                Post Detail Screen. 
            </Text>
            <Text>
                NAME: {name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  