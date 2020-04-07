import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
export const gobalStateContext = React.createContext();
import {myReducer, initState} from "./reducer/MyReducer";
const Stack = createStackNavigator();
export default function App() {
  // TODO-1.
  const [gobalState, dispatch] = React.useReducer(myReducer, initState);

  console.disableYellowBox = true;
  

  return (
    <gobalStateContext.Provider
      value={{ gobalState: gobalState, dispatch: dispatch }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="PostDetailScreen"
            component={PostDetailScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </gobalStateContext.Provider>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: "#f4511e",
    //       },
    //       headerTintColor: "#fff",
    //       headerTitleStyle: {
    //         fontWeight: "bold",
    //       },
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={({ navigation, route }) => ({
    //         headerTitle: (props) => <LogoTitle {...props} />,
    //       })}
    //     />
    //     <Stack.Screen
    //       name="Details"
    //       component={DetailsScreen}
    //       initialParams={{ itemId: 42 }}
    //       options={({ route }) => ({ title: route.params.name })}
    //     />
    //     <Stack.Screen
    //       name="CreatePost"
    //       component={CreatePostScreen}
    //       initialParams={{ itemId: 42 }}
    //     />
    //     <Stack.Screen
    //       name="TabScreen"
    //       component={TabScreen}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

// function HomeScreen({ route, navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation, setCount]);

//   React.useEffect(() => {
//     if (route.params?.post) {
//       console.log(`Effect: ${route.params?.post}`);
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() =>
//           navigation.navigate("Details", {
//             itemId: 86,
//             otherParam: "anything you want here",
//           })
//         }
//       />
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate("CreatePost")}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//       <Text>Count: {count}</Text>
//       <Button
//         title="Go to tab"
//         onPress={() => navigation.navigate("TabScreen")}
//       />
//     </View>
//   );
// }

// function TabScreen() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   const { itemId } = route.params;
//   const { otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push("Details", {
//             otherParam: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//       <Button
//         title="Update the title"
//         onPress={() => navigation.setOptions({ title: "Updated!" })}
//       />
//     </View>
//   );
// }

// function CreatePostScreen({ navigation }) {
//   const [postText, setPostText] = React.useState("");

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: "white" }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate("Home", { post: postText });
//         }}
//       />
//     </>
//   );
// }

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require("./assets/logo.jpg")}
//     />
//   );
// }
