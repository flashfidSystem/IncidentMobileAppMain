import React, { useState, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
  Animated,
  ImageBackground,
} from "react-native";
import Styles from "./Style";
const Dashboard = ({ navigation }) => {
  const [currentIndex, setCurentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const datas = [
    {
      id: "1",
      title: "No of Incident",
      num: 0,
    },
    {
      id: "2",
      title: "No of Warnings",
      num: 2,
    },
    {
      id: "3",
      title: "No of Offences",
      num: 3,
    },
  ];
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <View style={Styles.Wrapper}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 3,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", margin: 8 }}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../../../assets/images/images.png")}
              style={{ width: 35, height: 35, marginRight: 8, marginTop: 4 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.Bg}>
          <View style={{ flex: 3 }}>
            <FlatList
              data={datas}
              renderItem={({ item }) => (
                <View style={[Styles.Container, { width }]}>
                  <Text style={Styles.BgLabel}>{item.title}</Text>
                  <Text style={Styles.BgSubLabel}>{item.num}</Text>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator
              pagingEnabled
              bounces={false}
              alwaysBounceHorizontal={false}
              alwaysBounceVertical={false}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                {
                  useNativeDriver: false,
                }
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slidesRef}
            />
          </View>
        </View>
        <View style={Styles.Notifications}>
          <View style={Styles.Container}>
            <ScrollView>
              <Text style={Styles.NotificationsText}>No Notifications</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
