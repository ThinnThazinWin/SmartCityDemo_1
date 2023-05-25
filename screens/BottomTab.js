import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Home";
import Emergency from "./Emergency";
import Live from "./Live";
import Weather from "./Weather";
import Report from "./Report";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-minus-outline";
          } else if (route.name === "Weather") {
            iconName = "weather-cloudy";
          } else if (route.name === "Report") {
            iconName = "note-outline";
          } else if (route.name === "Live") {
            iconName = "access-point";
          } else if (route.name === "Emergency") {
            iconName = "bell-alert-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#2196f3",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Emergency"
        component={Emergency}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
