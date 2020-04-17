import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";

const defaultHeaderSettings = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleAlign: "center",
};

const Drawer = createDrawerNavigator();
const ProductsNavigator = createStackNavigator();
const OrdersNavigator = createStackNavigator();

const ProductsStack = () => (
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
    <ProductsNavigator.Screen
      name="Your Cart"
      component={CartScreen}
      options={{ title: "Your Cart" }}
    />
  </ProductsNavigator.Navigator>
);

const OrdersStack = () => (
  <OrdersNavigator.Navigator screenOptions={defaultHeaderSettings}>
    <OrdersNavigator.Screen
      name="Your Order(s)"
      component={OrdersScreen}
      options={{ title: "Your Order(s)" }}
    />
  </OrdersNavigator.Navigator>
);

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.primary,
        }}
      >
        <Drawer.Screen
          name="Products"
          component={ProductsStack}
          options={{
            drawerIcon: ({ size }) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={size}
                color={Colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersStack}
          options={{
            drawerIcon: ({ size }) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={size}
                color={Colors.primary}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
