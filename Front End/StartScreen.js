import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function StartScreen() {
  return (
    <View style={styles.StartScreen}>
      <View style={styles.Rectangle46} />
      <Image
        style={styles.Rectangle47}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/oplcb72yvt-1257%3A289?alt=media&token=0a4912ce-edd7-47b1-8ce7-6ab505e12de5",
        }}
      />
      <View style={styles.Ellipse13} />
      <Image
        style={styles.DownloadPhotoroom1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/oplcb72yvt-1351%3A52?alt=media&token=d600e884-cb00-4a3b-9d53-fce4028ce6c3",
        }}
      />
      <View style={styles.Frame1}>
        <Text style={styles.Txt5102}>ParkKU</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  StartScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 390,
    height: 844,
  },
  Rectangle46: {    //Blue Background
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(50,19,172,1)",
    width: 390,
    height: 489,
  },
  Rectangle47: {  //White backdrop
    position: "absolute",
    top: 347,
    left: 0,
    width: 391,
    height: 497,
  },
  Ellipse13: {  //Shadow behind logo
    position: "absolute",
    top: 390,
    left: 147,
    backgroundColor: "rgba(217,217,217,1)",
    width: 96,
    height: 95,
    borderRadius: 48,
  },
  DownloadPhotoroom1: {   //Logo
    position: "absolute",
    top: 390,
    left: 145,
    width: 101,
    height: 102,
  },
  Frame1: {   //Text frame
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 516,
    left: 135,
    backgroundColor: "rgba(255, 255, 255, 1)",
    mixBlendMode: "darken",
    width: 132,
    height: 45,
  },
  Txt5102: {    //Text itself
    fontSize: 34,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },
})
