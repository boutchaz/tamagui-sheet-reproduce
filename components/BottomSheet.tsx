import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  createSheet,
  SheetProps,
  styled,
  ThemeableStack,
  XStack,
  YStack
} from "tamagui";

type BottomSheetProps = SheetProps & {
  children: React.ReactNode;
  framePadding?: number;
  hideOverlay?: boolean;
};

const Handle = styled(XStack, {
  variants: {
    open: {
      true: {
        opacity: 0.35,
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    }
  } as const
});

const Overlay = styled(ThemeableStack, {
  opacity: 0.5,
  pointerEvents: "auto",
  backgroundColor: "$neutralBlack",
  height: "100%",
  width: "100%"
});

const Frame = styled(YStack, {
  backgroundColor: "$neutralWhite",
  borderRadius: 16
});

export const Sheet = createSheet({
  Frame,
  Handle,
  Overlay
});

const BottomSheet = ({
  children,
  snapPoints = [70, 30],
  modal = true,
  framePadding = 16,
  hideOverlay = false,
  ...rest
}: BottomSheetProps) => (
  <Sheet
    snapPoints={snapPoints}
    animation={rest.animation || "medium"}
    zIndex={100_000}
    modal={modal}
    dismissOnSnapToBottom
    {...rest}
  >
    {!hideOverlay && <Sheet.Overlay />}
    <Sheet.Handle open={rest.open} />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      accessible={false}
    >
      <Sheet.Frame padding={framePadding}>{children}</Sheet.Frame>
    </TouchableWithoutFeedback>
  </Sheet>
);

export default BottomSheet;
