import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#FAFAFD" />
      <Text
        style={{
          color: "#356899",
          fontWeight: 600,
          fontSize: 22,
          marginBottom: 5,
        }}
      >
        Jobizz
      </Text>
      <Text
        style={{
          color: "#0D0D26",
          fontWeight: 600,
          fontSize: 25,
          marginBottom: 5,
        }}
      >
        Welcome Back 👋
      </Text>
      <Text style={{ color: "#0D0D26", fontWeight: 400, marginBottom: 70 }}>
        Let’s log in. Apply to jobs!
      </Text>
      <View>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TouchableOpacity>
          <Text
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.continueWith}>
        <View style={styles.line}></View>
        <Text>Or continue with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.continueWithImages}>
        <TouchableOpacity>
          <Image source={require("../assets/apple.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/google.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/facebook.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ textAlign: "center", color: "#AFB0B6" }}>
          Haven’t an account? <Text style={{ color: "#356899" }}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FAFAFD",
  },
  input: {
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 7,
    backgroundColor: "#356899",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  line: {
    height: 1,
    width: "30%",
    backgroundColor: "#AFB0B6",
    marginVertical: 20,
  },
  continueWith: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  continueWithImages: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default LoginScreen;
