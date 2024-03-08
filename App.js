import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import { StatusBar } from 'expo-status-bar';
import LoginForm from "./components/LoginForm";
import Juros from "./components/Juros";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginForm}
          options={{ title: "Bem-vindo" }}
        />
 
        <Stack.Screen 
          name="Juros"
          component={Juros}
          options={{ title: "Cálculo de Juros e Idade" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
