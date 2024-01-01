import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./post.styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { COLORS } from "../../assets/constants";
import { useNavigation } from "@react-navigation/native";

const Post = ({ postImage, description, userName, userImage }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const handleLike = () => {
    console.log("xxxxxxx");
    setIsLiked(!isLiked);
  };

  const navigateToUserProfile = () => {
    navigation.navigate("User Profile", {
      postImage,
      description,
      userName,
      userImage,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={postImage} style={styles.postImage} />
      </View>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={navigateToUserProfile}
        >
          <Image source={userImage} style={styles.profilePic} />
          <View style={styles.profileText}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.time}>10 min ago</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Text>100</Text>
            <FontAwesome name="comment-o" size={30} />
          </View>
          <TouchableOpacity onPress={() => handleLike()}>
            <View style={styles.button}>
              <Text>100</Text>
              {isLiked ? (
                <Ionicons name="heart" size={30} color={COLORS.red} />
              ) : (
                <Ionicons name="heart-outline" size={30} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;
