import React from "react";
import { FlatList, Button, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as productsActions from "../../store/actions/products";

const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {}}
        >
          <Button color={Colors.primary} title="Edit" onPress={() => {}} />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={() => {
              dispatch(productsActions.deleteProduct(itemData.item.id));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
