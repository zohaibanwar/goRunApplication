import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewToRunning from "../screens/newToRunning";
import NewToRunningNo from "../screens/newToRunningNo";
import NewToRunningYes from "../screens/newToRunningYes";
import ChooseParams from "../screens/chooseParams";
import Home from "../screens/home";
import TipsAndHelp from "../screens/tipsAndHelp";
import FreeRun from "../screens/freeRun";
import FreeRunStart from "../screens/freerRunStart";
import FreeRunCam from "../screens/freeRunCam";
import PlanWorkout from "../screens/planWorkout";
import WorkoutComplete from "../screens/workoutComplete";
import ShareWorkout from "../screens/shareWorkout";
import BoostYourResults from "../screens/boostYourResult";
import SettingsGps from "../screens/settingsApplication";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="NewToRunning" component={NewToRunning} />
        <Stack.Screen name="NewToRunningNo" component={NewToRunningNo} />
        <Stack.Screen name="NewToRunningYes" component={NewToRunningYes} />
        <Stack.Screen name="ChooseParams" component={ChooseParams} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FreeRun" component={FreeRun} />
        <Stack.Screen name="TipsAndHelp" component={TipsAndHelp} />
        <Stack.Screen name="FreerRunStart" component={FreeRunStart} />
        <Stack.Screen name="FreeRunCam" component={FreeRunCam} />
        <Stack.Screen name="PlanWorkout" component={PlanWorkout} />
        <Stack.Screen name="WorkoutComplete" component={WorkoutComplete} />
        <Stack.Screen name="ShareWorkout" component={ShareWorkout} />
        <Stack.Screen name="SettingsGps" component={SettingsGps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
