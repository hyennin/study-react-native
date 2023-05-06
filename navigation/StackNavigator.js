import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../src/pages/profile';
import Competition from '../src/pages/competition';
import Community from '../src/pages/community';
import BookBarcode from '../src/pages/bookBarcode';
import MyPage from '../src/pages/mypage';
import OnBoarding1 from '../src/pages/onBoarding1';
import OnBoarding2 from '../src/pages/onBoarding2';
import OnBoarding3 from '../src/pages/onBoarding3';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='온보딩1' component={OnBoarding1}/>
          <Stack.Screen name='온보딩2' component={OnBoarding2}/>
          <Stack.Screen name='온보딩3' component={OnBoarding3}/>
          <Stack.Screen name="마이페이지" component={MyPage} />
          <Stack.Screen name="프로필 설정" component={Profile} />
          <Stack.Screen name="공모전" component={Competition} />
          <Stack.Screen name="커뮤니티" component={Community} />
          <Stack.Screen name="도서대출증" component={BookBarcode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;