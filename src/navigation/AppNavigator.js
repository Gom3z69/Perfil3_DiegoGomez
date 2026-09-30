import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.gold,
    background: colors.black,
    card: colors.black,
    text: colors.gold,
    border: colors.red,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ animation: 'slide_from_right', headerTitleStyle: { fontWeight: 'bold' } }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Planets" component={PlanetsScreen} options={{ title: 'Planetas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
