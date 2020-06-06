import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'native-base';
import Homepage from './Pages/Homepage';
import Settings from './Pages/Settings';
import WorkoutLists from './Pages/WorkoutLists';
import WorkoutView from './Pages/WorkoutView';

const CustomDrawerNavigation = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
                <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./assets/no-image.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />
                </View>
                <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>John Doe</Text>
                </View>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
            <View style={{ alignItems: "center", bottom: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', marginRight: 15 }}>
                        <Icon name="mail" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon name="bug" style={{ fontSize: 24 }} onPress={() => console.log("clicking bug")} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Drawer = createDrawerNavigator({
    Home: {
      screen: Homepage,
      navigationOptions: {
        title: 'Homepage'
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings'
      }
    },
    WorkoutLists: {
      screen: WorkoutLists,
      navigationOptions: {
        title: 'Workout Lists'
      }
    },
    WorkoutView: {
      screen: WorkoutView,
      navigationOptions: {
        title: 'Workout'
      }
    }
  },
    {
      drawerPosition: 'left',
      contentComponent: CustomDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (Dimensions.get('window').width / 3) * 2
});

const App = createAppContainer(Drawer);

export default App;