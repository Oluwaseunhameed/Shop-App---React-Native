import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import Colors from "../constants/Colors";

const defaultHeaderSettings = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleAlign: "center",
};

const ProductsNavigator = createStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsNavigator.Navigator screenOptions={defaultHeaderSettings}>
        <ProductsNavigator.Screen
          name="All Products"
          component={ProductsOverviewScreen}
          options={{ title: "All Products" }}
        />
        <ProductsNavigator.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={{ title: "Product Detail" }}
        />
      </ProductsNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
