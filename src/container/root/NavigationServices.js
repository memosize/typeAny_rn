import { NavigationActions, NavigationBackAction } from "react-navigation";

let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

/** 在所有组件中控制导航*/
function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

/** 返回*/
function goBack() {
  _navigator.dispatch(
    NavigationActions.back({
      key: "GameScreen"
    })
  );
  //_navigator.navigation.goBack();
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator
};
