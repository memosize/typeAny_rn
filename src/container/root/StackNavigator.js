import React from "react";
import { Image, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBar from "./TabNavigator";
import HomeScreen from "../HomeScreen";
import MeScreen from "../MeScreen";
import InfoScreen from "../InfoScreen";

/*需要注册的页面*/
const NavigatorRouteConfigs = {
  TabBar: { screen: TabBar },
  HomeScreen: { screen: HomeScreen },
  MeScreen: { screen: MeScreen },
  InfoScreen: { screen: InfoScreen }
};
//导航风格配置
const NavigatorConfig = {
  initialRouteName: "TabBar", // 默认显示界面
  //mode: 'card',// 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: "screen", // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  gesturesEnabled: true, //是否支持滑动返回手势
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: "white", //导航栏文字颜色
      //alignSelf:'center',//文字居中
      //fontWeight: 'bold',//加粗
      flex: 1,
      textAlign: "center"
    },
    headerStyle: {
      backgroundColor: 'blue' //导航栏背景颜色
      //opacity: 0.2,
    },
    headerBackTitle: null,
    headerBackImage: (
      <Icon name="chevron-left" size={40} color={'black'}/>

    ),
    headerRight: <View />,
    //headerLeft: <View/>,
    headerTintColor: 'white'
    //opacity: 0.2,
  }
  // transitionConfig: () => ({
  //     screenInterpolator: StackViewStyleInterpolator.forHorizontal
  // })
};

//导出根控制器
const Navigator = createAppContainer(
  createStackNavigator(NavigatorRouteConfigs, NavigatorConfig)
);
export default Navigator;
