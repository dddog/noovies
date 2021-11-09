import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // 시작에 필요한 자원 로딩하는 곳
    // ex)await new Promise((resolve) => setTimeout(resolve, 10000));
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./yanadoo.jpg"),
      "https://search.naver.com/search.naver?where=nexearch&sm=top_brd&fbm=0&ie=utf8&query=%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8%EC%9D%98+%EB%82%A0",
    ]);
    await Promise.all([...fonts, ...images]);
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
