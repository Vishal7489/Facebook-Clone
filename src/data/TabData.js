import HomeScreen from "../screens/HomeScreen.jsx";
import FriendScreen from "../screens/FriendScreen.jsx";
import WatchScreen from "../screens/WatchScreen.jsx";
import MarketPlaceScreen from "../screens/MarketPlaceScreen.jsx";
import NotificationScreen from "../screens/NotificationScreen.jsx"
import ProfileScreen from "../screens/ProfileScreen.jsx";

export const TabData = [
  {
    id: 1,
    route: HomeScreen,
    name: 'Home',
    activeIconName: 'home',
    activeIconType: 'Entypo',
    inactiveIconName: 'home-outline',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,
  },

  
  {
    id: 2,
    route: FriendScreen,
    name: 'Friends',
    activeIconName: 'people-sharp',
    activeIconType: 'Ionicons',
    inactiveIconName: 'people-outline',
    inactiveIconType: 'Ionicons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 3,
    route: WatchScreen,
    name: 'Watch',
    activeIconName: 'youtube-tv',
    activeIconType: 'MaterialCommunityIcons',
    inactiveIconName: 'television-play',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 4,
    route: MarketPlaceScreen,
    name: 'MarketPlace',
    activeIconName: 'shop',
    activeIconType: 'Entypo',
    inactiveIconName: 'storefront-outline',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 5,
    route: NotificationScreen,
    name: 'Notification',
    activeIconName: 'notifications',
    activeIconType: 'Ionicons',
    inactiveIconName: 'notifications-outline',
    inactiveIconType: 'Ionicons',
    size: 24,
    unFocusSize: 24,
  },

  {
    id: 6,
    route: ProfileScreen,
    name: 'Profile',
    activeIconName: 'person',
    activeIconType: 'Ionicons',
    inactiveIconName: 'person-outline',
    inactiveIconType: 'Ionicons',
    size: 26,
    unFocusSize: 26,
  },
];

