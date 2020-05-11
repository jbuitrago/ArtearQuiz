import React, { useState } from "react";
import { Header, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native"

const _Header = props => {

 

  const navigation = useNavigation();
  return (
    <Header
      leftComponent={ <Icon name="menu" color='#FFF' onPress={() => navigation.navigate("Home")} />}
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontSize: 20 },
      }}
      rightComponent={
        <Icon name="home" color='#FFF' onPress={() => navigation.navigate("Home")} />
      }
      containerStyle={{
        backgroundColor: "#1B5E20",
        justifyContent: "space-around",
      }}
    />
  );
};

export default _Header;
