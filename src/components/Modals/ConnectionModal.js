import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Colors } from "../../utils/Colors";
import { Font } from "../../utils/font";

import Modal from "react-native-modal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NetInfo from "@react-native-community/netinfo";

const ConnectionModal = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected == false) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={isConnected}
      statusBarTranslucent
      onBackdropPress={() => setIsConnected(false)}
      animationIn="fadeInUpBig"
      animationInTiming={400}
      animationOut="fadeOutDownBig"
      animationOutTiming={1500}
      style={styles.ToEnd}
    >
      <View style={styles.MainModalBox}>
        <View style={styles.IconBox}>
          <MaterialIcons
            name="wifi-tethering-error"
            size={scale(30)}
            color={Colors.White}
          />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  MainModalBox: {
    height: verticalScale(48),
    width: "95%",
    backgroundColor: Colors.Red,
    borderRadius: scale(12),
    bottom: scale(20),
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "center",
  },
  ModalMain: {
    height: verticalScale(70),
    backgroundColor: Colors.Main,
    borderRadius: 10,
    marginTop: scale(20),
    flexDirection: "row",
  },
  ToEnd: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: Colors.White,
    fontSize: scale(14),
    fontFamily: Font.Inter500,
  },
  TextBox: { flex: 3, justifyContent: "center" },
  IconBox: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ConnectionModal;
