import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../HomeStyle";

export default function Home() {
  const [images, setimages] = useState([
    require("../assets/smartcity1.1.jpg"),
    require("../assets/smartcity1.2.jpg"),
    require("../assets/smartcity1.3.jpg"),
    require("../assets/smartcity1.4.jpg"),
    require("../assets/smartcity1.1.jpg"),
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="format-align-left"
            size={20}
            color={"#fff"}
            style={{ marginRight: 10 }}
          />
          <Text style={[styles.txtStyle, { fontSize: 18, color: "#1273de" }]}>
            Smart City
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="notifications-none"
            size={30}
            color={"#fff"}
            style={{ marginRight: 10 }}
          />
          <MaterialIcons name="account-circle" size={30} color={"#fff"} />
        </View>
      </View>

      <View style={styles.head}>
        <View style={styles.searchSection}>
          <MaterialIcons style={styles.searchIcon} name="search" size={20} />
          <TextInput style={styles.input} placeholder="Search" />
        </View>

        <Text style={[styles.txtStyle, { marginTop: 17, marginBottom: 20 }]}>
          Services
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <Foundation name="target-two" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Business</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="home-flood"
                size={25}
                color={"#2196f3"}
              />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Government</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialIcons name="school" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Education</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialIcons name="work" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>City Job</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="shield-check"
                size={25}
                color={"#2196f3"}
              />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Safety</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <Entypo name="circular-graph" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Recreation</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialCommunityIcons
                name="train-car"
                size={25}
                color={"#2196f3"}
              />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Traffic</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <FontAwesome5 name="virus" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Covid-19</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <SimpleLineIcons name="note" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>Tender</Text>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity style={styles.iconTouch}>
              <MaterialIcons name="more-horiz" size={25} color={"#2196f3"} />
            </TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 13 }}>More</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scroll}>
        <View style={styles.body}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[styles.txtStyle, { marginTop: 10, marginBottom: 20 }]}
            >
              Upcoming Events
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={25}
                color={"gray"}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>View All</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#2196f3" }}>All</Text>
            <Text style={styles.txt}>Festivals</Text>
            <Text style={styles.txt}>Concerts</Text>
            <Text style={styles.txt}>Conferences</Text>
            <Text style={styles.txt}>Exhibition</Text>
            <Text style={styles.txt}>Sports</Text>
          </View>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => (
              <Image source={item} key={index} style={styles.img} />
            )}
          />
        </View>

        <View style={styles.foot}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[styles.txtStyle, { marginTop: 10, marginBottom: 10 }]}
            >
              Latest News & Publication
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={25}
                color={"gray"}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>View All</Text>
            </View>
          </View>

          <Text>Read Our Latest News. Be Always in Trend With Daily News</Text>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => (
              <Image source={item} key={index} style={styles.img} />
            )}
          />
        </View>
        <View style={styles.foot}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={[styles.txtStyle, { marginTop: 10, marginBottom: 10 }]}
            >
              Latest News & Publication
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="calendar"
                size={25}
                color={"gray"}
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: "gray" }}>View All</Text>
            </View>
          </View>

          <Text>Read Our Latest News. Be Always in Trend With Daily News</Text>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => (
              <Image source={item} key={index} style={styles.img} />
            )}
          />
        </View>
      </ScrollView>
      <StatusBar hidden={false} backgroundColor={"#0e1240"} />
    </View>
  );
}
