//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    id: "hhbdhsjsdh",
    title: "Does Dry in January Improve Your Health?",
    name: "Bilal Zakari",
    time: "4 min read",
    nameimg: 'require("./../../assets/p1.jpeg")',
    img: 'require("./../../assets/1.jpeg")',
  },
  {
    id: "hhbdhsdh",
    title: "How To Seem Like You Have Your Shot Together",
    name: "Bilal Zakari",
    time: "2 min read",
    nameimg: 'require("./../../assets/p2.jpeg")',
    img: 'require("./../../assets/2.jpeg")',
  },
  {
    id: "hhsbdhsjsdh",
    title: "You do hire a software engineer to do work",
    name: "Bilal Zakari",
    time: "9 min read",
    nameimg: 'require("./../../assets/p1.jpeg")',
    img: 'require("./../../assets/3.jpeg")',
  },
  {
    id: "dhsjsdh",
    title: "Does Dry in January Improve Your Health",
    name: "Bilal Zakari",
    time: "20 min read",
    nameimg: 'require("./../../assets/p2.jpeg")',
    img: 'require("./../../assets/4.jpeg")',
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.pinkbox}></View>
    <View
      style={{
        height: 100,
        width: 90,
        position: "absolute",
        backgroundColor: "azure",
        top: 7,
        left: 7,
      }}
    >
      <Image style={{ height: 90, width: 80 }} />
    </View>

    <View style={styles.info}>
      <Text style={{ fontSize: 20, marginBottom: 25 }}>{item.title}</Text>

      <View style={{ flexDirection: "row" }}>
        <Image style={{ height: 20, width: 20, borderRadius: 50 }} />
        <Text style={{ marginLeft: 5 }}>{item.name}</Text>
        <Text style={{ marginLeft: 20, color: "grey" }}>. {item.time}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const homePage = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("ReviewFlatList", item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons style={{ flex: 1 }} name="apps" size={30} color="black" />
        <Text
          style={{
            flex: 2,
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Discover
        </Text>
        <AntDesign
          style={{ flex: 1, textAlign: "right" }}
          name="search1"
          size={25}
          color="black"
        />
      </View>
      <FlatList
        style={styles.flatlist}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
  },
  pinkbox: {
    flex: 1,
    height: 50,
    backgroundColor: "pink",
  },
  info: {
    flex: 3,
    padding: 10,
    paddingLeft: 30,
  },
});

//make this component available to the app
export default homePage;
