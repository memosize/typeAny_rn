import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../HomeScreen";
import MeScreen from "../MeScreen";
import InfoScreen from "../InfoScreen";

//底部标签栏视图配置
const TabBarRouteConfigs = {
  //首页标签
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "首页",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="home" size={30} color={focused?'red':tintColor}/>
      )
    }
  },
  //info page
  InfoScreen: {
    screen: InfoScreen,
    navigationOptions: {
      tabBarLabel: "信息",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="tree" size={30} color={focused?'red':tintColor}/>
      )
    }
  },
  //我的标签
  MeScreen: {
    screen: MeScreen,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="arrow-left" size={30} color={focused?'red':tintColor}/>
      )
    }
  }
};

//底部标签栏风格配置
const TabBarConfigs = {
  animationEnabled: false, // 切换页面时不显示动画
  tabBarPosition: "bottom", // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 禁止左右滑动
  backBehavior: "none", // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  lazy: true, //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦
  tabBarOptions: {
    activeTintColor: 'red', // 文字和图片选中颜色
    //inactiveTintColor: '#979797', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    style: {
      backgroundColor: "#fff" // TabBar 背景
    },
    labelStyle: {
      fontSize: 10, // 文字大小
      marginBottom: 5
    }
  }
};

/** 导出Tab*/
const TabBar = createBottomTabNavigator(TabBarRouteConfigs, TabBarConfigs);
TabBar.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  switch (routeName) {
    case "HomeScreen":
      return HomeScreen.navigationOptions({ navigation });
    case "InfoScreen":
      return InfoScreen.navigationOptions({ navigation });
    case "MeScreen":
      return MeScreen.navigationOptions({ navigation });
  }
};
export default TabBar;
