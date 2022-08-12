import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import colors from "../../assets/theme/colors";
import Styles from "./Style";
const Menu = () => {
  return (
    <ScrollView>
      <View style={Styles.Wrapper}>
        <View style={Styles.Container}>
          <View style={Styles.Profile} elevation={5}>
            <Image
              style={Styles.ProfileImage}
              source={require("../../../assets/images/images.png")}
            />
            <View style={Styles.ProfileText}>
              <Text style={Styles.ProfileName}>Olorunfemi Adedoyin Faith</Text>
              <Text style={Styles.ProfileTitle}>HOS</Text>
            </View>
            <View style={Styles.Icon}>
              <Icon type="ionicon" name="chevron-forward" size={22} />
            </View>
          </View>
          <View style={Styles.Details} elevation={5}>
            <View style={Styles.DetailsContainer}>
              <View style={Styles.DetailsLeft}>
                <Icon
                  style={Styles.DetailsIcon}
                  type="ionicon"
                  name="person-circle"
                  size={32}
                  color={colors.primary}
                />
              </View>
              <View style={Styles.DetailsRight}>
                <Text style={Styles.ProfileName}>
                 Reg SO
                </Text>
                <Text style={Styles.ProfileTitle}>HOS</Text>
              </View>
              <View style={Styles.Icon}>
                <Icon type="ionicon" name="chevron-forward" />
              </View>
            </View>

            <View style={Styles.DetailsContainer}>
              <View style={Styles.DetailsLeft}>
                <Icon
                  style={Styles.DetailsIcon}
                  type="ionicon"
                  name="cog"
                  size={32}
                  color={colors.primary}
                />
              </View>
              <View style={Styles.DetailsRight}>
                <Text style={Styles.ProfileName}>Settings</Text>
                <Text style={Styles.ProfileTitle}>HOS</Text>
              </View>
              <View style={Styles.Icon}>
                <Icon type="ionicon" name="chevron-forward" size={22} />
              </View>
            </View>

            <View style={Styles.DetailsContainer}>
              <View style={Styles.DetailsLeft}>
                <Icon
                  style={Styles.DetailsIcon}
                  type="ionicon"
                  name="person-add"
                  size={32}
                  color={colors.primary}
                />
              </View>
              <View style={Styles.DetailsRight}>
                <Text style={Styles.ProfileName}>About us</Text>
                <Text style={Styles.ProfileTitle}>HOS</Text>
              </View>
              <View style={Styles.Icon}>
                <Icon type="ionicon" name="chevron-forward" size={22} />
              </View>
            </View>
            <View style={Styles.DetailsContainer}>
              <View style={Styles.DetailsLeft}>
                <Icon
                  style={Styles.DetailsIcon}
                  type="ionicon"
                  name="help"
                  size={32}
                  color={colors.primary}
                />
              </View>
              <View style={Styles.DetailsRight}>
                <Text style={Styles.ProfileName}>Help</Text>
                <Text style={Styles.ProfileTitle}>HOS</Text>
              </View>
              <View style={Styles.Icon}>
                <Icon type="ionicon" name="chevron-forward" size={22} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;
