import React, { Component,useState,useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import Product from "./../reducer/ProductReducer";
import ProductBox from "./ProductBox";
import { ScrollView } from "react-native-gesture-handler";
import {gobalStateContext} from './../App';
import {UPDATE_NAME} from './../reducer/MyReducer';
import MessageBox from './MessageBox';
export default Home = ({route, navigation}) => {
  const state = useContext(gobalStateContext);
  const [products, setProducts] = useState(Product);
  const [name, setName] = useState("");
  

  function gotoDetail() {
    state.dispatch({
      type:UPDATE_NAME,
      name: name
    })
    // navigation.push("PostDetailScreen");
  }
 
    return (
      <View style={styles.screen}>
        <ScrollView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={(item) => {
              return <ProductBox item={item.item} />;
            }}
          />
          <View style={styles.vertical}>
            <TextInput
              value={name}
              style={styles.input}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Button title="Go to details" onPress={() => gotoDetail()} />
            <Text>{name}</Text>
          </View>
          <MessageBox/>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vertical: {
    flexDirection: "column",
    padding: 20,
  },
  input: {
    borderRadius: 10,
    borderColor: "#868686",
    borderWidth: 1,
    margin: 5,
  },
});
