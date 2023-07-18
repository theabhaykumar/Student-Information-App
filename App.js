import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";
import WelcomeCard from "./screens/WelcomeCard";
import Profile from "./screens/Profile";
import Attendance from "./screens/Attendance";
import Marks from "./screens/Marks";
import Ebooks from "./screens/Ebooks";
import Notes from "./screens/Notes";
import UsersContextProvider from "./context/user-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator({ route }) {
    // console.log(route.params);
    let data = route.params;
    // console.log(data)
    return (
      <Drawer.Navigator initialRouteName="Profile" screenOptions={{headerStyle: {backgroundColor: "#e2edff"}, headerTintColor: "#3d43a7"}}>
        {/* defaultStatus="open" */}
        <Drawer.Screen
          name="Profile"
          component={Profile}
          initialParams={{ params: route.params }}
          options={{headerTitle: ""}}
        />

        <Drawer.Screen
          name="Attendance"
          component={Attendance}
          initialParams={{ params: route.params }}
          options={{headerTitle: ""}}
        />
        {/* <Drawer.Screen name="Attendance" component={Attendance} /> */}
        <Drawer.Screen name="Marks" component={Marks} />
        <Drawer.Screen name="Ebooks" component={Ebooks} />
        <Drawer.Screen name="Notes" component={Notes} />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <UsersContextProvider>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Welcome"
                component={WelcomeCard}
                options={{
                  title: "Student Information App",
                  headerTitleAlign: "center",
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </UsersContextProvider>
    </>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
