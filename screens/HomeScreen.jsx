import { useContext } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { UserContext } from "../context/UserContext";

const HomeScreen = () => {
  const { name, email } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#FAFAFD" />
      <View style={styles.profile}>
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require("../assets/Ellipse.png")} />
      </View>
      <View style={styles.searchBar}>
        <View style={styles.search}>
          <Image source={require("../assets/search.png")} />
          <TextInput placeholder="Search a job or position" />
        </View>
        <View style={styles.filter}>
          <Image source={require("../assets/filter.png")} />
        </View>
      </View>
      <View>
        <View style={styles.featuredJobs}>
          <Text style={styles.featuredJobsTitle}>Featured Jobs</Text>
          <Text style={styles.featuredJobsSeeAll}>See all</Text>
        </View>
        <View>
          <FlatList
            horizontal
            data={[
              {
                key: "1",
                role: "Software Engineer",
                company: "Facebook",
                location: "Accra, Ghana",
                salary: "$180,000",
                image: require("../assets/Vector.png"),
              },
              {
                key: "2",
                role: "Software Engineer",
                company: "Google",
                location: "Accra, Ghana",
                salary: "$160,000",
                image: require("../assets/google.png"),
              },
              {
                key: "4",
                role: "Software Engineer",
                company: "Github",
                salary: "$92,000/y",
                location: "Florida, US",
                image: require("../assets/github.png"),
              },
              {
                key: "5",
                role: "Software Engineer",
                company: "Pinterest",
                salary: "$102,000/y",
                location: "New York, US",
                image: require("../assets/pinterest.png"),
              },
              {
                key: "6",
                role: "Data Analyst",
                company: "Reddit",
                salary: "$78,000/y",
                location: "Washington, US",
                image: require("../assets/reddit.png"),
              },
              {
                key: "7",
                role: "Machine Learning Engineer",
                company: "Meta",
                salary: "$120,000/y",
                location: "California, US",
                image: require("../assets/meta.png"),
              },
              {
                key: "8",
                role: "Artificial Intelligence Engineer",
                company: "Microsoft",
                salary: "$126,000/y",
                location: "Boston, US",
                image: require("../assets/microsoft.png"),
              },
            ]}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <ImageBackground
                style={styles.card}
                source={require("../assets/Group.png")}
                opacity={0.1}
              >
                <View style={styles.cardInfo}>
                  <View style={styles.cardImage}>
                    <Image
                      source={item.image}
                      //   style={{ width: 100, height: 100 }}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: 16,
                      }}
                    >
                      {item.role}
                    </Text>
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      {item.company}
                    </Text>
                  </View>
                </View>
                <View style={styles.cardSalary}>
                  <Text style={{ color: "white" }}>{item.salary}</Text>
                  <Text style={{ color: "white" }}>{item.location}</Text>
                </View>
              </ImageBackground>
            )}
          />
        </View>
      </View>
      <View>
        <View style={styles.featuredJobs}>
          <Text style={styles.featuredJobsTitle}>Popular Jobs</Text>
          <Text style={styles.featuredJobsSeeAll}>See all</Text>
        </View>
        <View>
          <FlatList
            nestedScrollEnabled
            data={[
              {
                key: "1",
                role: "Jr Executive",
                company: "Burger King",
                salary: "$96,000/y",
                location: "Los Angels, US",
                image: require("../assets/burger-king.png"),
              },
              {
                key: "2",
                role: "Product Manager",
                company: "Beats",
                salary: "$84,000/y",
                location: "Florida, US",
                image: require("../assets/beats.png"),
              },
              {
                key: "3",
                role: "Product Manager",
                company: "Facebook",
                salary: "$86,000/y",
                location: "Florida, US",
                image: require("../assets/Vector.png"),
              },
              {
                key: "4",
                role: "Software Engineer",
                company: "Github",
                salary: "$92,000/y",
                location: "Florida, US",
                image: require("../assets/github.png"),
              },
              {
                key: "5",
                role: "Software Engineer",
                company: "Pinterest",
                salary: "$102,000/y",
                location: "New York, US",
                image: require("../assets/pinterest.png"),
              },
              {
                key: "6",
                role: "Data Analyst",
                company: "Reddit",
                salary: "$78,000/y",
                location: "Washington, US",
                image: require("../assets/reddit.png"),
              },
              {
                key: "7",
                role: "Machine Learning Engineer",
                company: "Meta",
                salary: "$120,000/y",
                location: "California, US",
                image: require("../assets/meta.png"),
              },
              {
                key: "8",
                role: "Artificial Intelligence Engineer",
                company: "Microsoft",
                salary: "$126,000/y",
                location: "Boston, US",
                image: require("../assets/microsoft.png"),
              },
            ]}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View style={styles.popularCard}>
                <View style={styles.cardInfo}>
                  <Image source={item.image} />
                  <View>
                    <Text
                      style={{
                        fontWeight: "600",
                        fontSize: 14,
                        color: "#0D0D26",
                      }}
                    >
                      {item.role}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#0D0D26",
                        fontWeight: 300,
                      }}
                    >
                      {item.company}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#0D0D26",
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    {item.salary}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#0D0D26",
                      fontWeight: 300,
                    }}
                  >
                    {item.location}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
    padding: 20,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileName: {
    fontWeight: "700",
    fontSize: 22,
    color: "#0D0D26",
  },
  email: {
    fontWeight: "400",
    fontSize: 15,
    color: "#95969D",
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  filter: {
    backgroundColor: "#F2F2F3",
    color: "#95969D",
    borderRadius: 10,
    padding: 10,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F2F2F3",
    color: "#95969D",
    borderRadius: 10,
    padding: 10,
    width: "80%",
  },
  featuredJobs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  featuredJobsTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#0D0D26",
  },
  featuredJobsSeeAll: {
    color: "#95969D",
    fontSize: 14,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: "#356899",
    width: 280,
    height: 180,
    marginRight: 10,
    justifyContent: "space-between",
  },
  cardInfo: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  cardSalary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardImage: {
    backgroundColor: "white",
    width: 55,
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  popularCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});

export default HomeScreen;
