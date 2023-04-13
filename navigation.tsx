import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/pages/login';
import {ScreenName} from './src/utils/screenName';
import AmountEntryPage from './src/pages/amountEntryPage';

interface ComponentNameProps {}
const Stack = createNativeStackNavigator();

const RootNavigation: React.FC<ComponentNameProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenName.AmountEntryPage}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenName.Login} component={LoginPage} />
        <Stack.Screen
          name={ScreenName.AmountEntryPage}
          component={AmountEntryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
