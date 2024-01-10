import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
      },
      buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      button: {
        padding: 10,
        color: "blue",
      },
      inputs: { marginBottom: SIZES.large },
      label: {
        fontFamily: "regular",
        marginBottom: 5,
        marginEnd: 5,
        fontSize: SIZES.xSmall,
      },
      errorMsg: {
        color: COLORS.red,
        fontFamily: "regular",
        marginTop: 5,
        marginLeft: 5,
        fontSize: SIZES.xSmall,
      },
      inputWrapper: (borderColor) => ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
      }),
});

export default styles;