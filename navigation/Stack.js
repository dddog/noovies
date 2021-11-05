import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";

const Screen1 = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("2")}>
    <View>
      <Text>1</Text>
    </View>
  </TouchableOpacity>
);
const Screen2 = () => (
  <View>
    <Text>2</Text>
  </View>
);
const Screen3 = () => (
  <View>
    <Text>3</Text>
  </View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="1" component={Screen1} />
    <NativeStack.Screen name="2" component={Screen2} />
    <NativeStack.Screen name="3" component={Screen3} />
  </NativeStack.Navigator>
);

export default Stack;
