// import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import StackRoutes from './stackRoutes';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer =  createDrawerNavigator();
// const Tab =  createBottomTabNavigator();

export default function Routes(){

  return (
   
    // <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{ // Utilizando a propiedade screenOptions dentro do componente Drawer.Navigator afetando todas os Drawer's
      // headerShown: false,
      drawerStyle:{
        backgroundColor:'black'
      },
      drawerActiveBackgroundColor: '#878787',
      drawerActiveTintColor: 'purple',
      drawerInactiveBackgroundColor: 'white',

      }}
      > 
        <Drawer.Screen 
        name = 'HomeStack'
        component = {StackRoutes}
        options={{
          
          drawerIcon: () => {
           <Feather name ='home' color = {'black'} size = {25} />
          }
        }}
        />

     <Drawer.Screen 
        name = 'SOBRE'
        component = {Sobre}
        options={{
          drawerIcon: () => {
            return <Feather name ='file-text' color = {'black'} size = {25}/>
          }
        }}
        />

     <Drawer.Screen 
        name = 'CONTATO'
        component = {Contato}
        options={{
          drawerIcon: () => {
            return <Feather name ='phone-call' color = {'black'} size = {25}/>
          }
        }}
        />

      </Drawer.Navigator>
      
    // </NavigationContainer>
   
)}