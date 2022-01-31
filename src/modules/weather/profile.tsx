import * as React from 'react';
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
export default function App() {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        customMapStyle={styles.map}
        // style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
