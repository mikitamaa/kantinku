import React  from "react";

import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/rootNavigator";

export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar
        barstyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
      
      <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})