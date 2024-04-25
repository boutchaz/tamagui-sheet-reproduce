import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { Button, StackProps, Text, View } from "tamagui";

import BottomSheet from "./BottomSheet";

interface ContactSupportProps extends StackProps {}

const ContactSupport = (props: ContactSupportProps) => {
  const [showSupportDetails, setShowSupportDetails] = useState(false);

  const handleBottomSheet = () => {
    Keyboard.dismiss();
    setShowSupportDetails(!showSupportDetails);
  };
  return (
    <View {...props}>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-end",
          marginTop: 18
        }}
        onPress={handleBottomSheet}
      >
        <Text>broken</Text>
      </TouchableOpacity>
      <BottomSheet
        open={showSupportDetails}
        onOpenChange={setShowSupportDetails}
        snapPoints={[40]}
      >
        <View
          justifyContent="center"
          alignItems="center"
        >
          <TouchableOpacity
            style={{
              width: 32,
              height: 32,
              borderRadius: 32,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              marginTop: 18
            }}
            onPress={handleBottomSheet}
          >
            <Text>X</Text>
          </TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 27, lineHeight: 45 }}>💬</Text>
          </View>
          <Text
            fontWeight="bold"
            marginBottom={16}
            marginTop={4}
            fontSize={18}
          >
            ui.contact_support.title
          </Text>
          <Button marginBottom={16}>
            <Text
              color="$neutralWhite"
              fontWeight="bold"
            >
              home.help
            </Text>
          </Button>

          <Button backgroundColor="$neutralWhite">
            <Text
              color="$primaryMain"
              fontWeight="bold"
            >
              ui.contact_support.button
            </Text>
          </Button>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ContactSupport;
