import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import styles from "./comment.styles";
import { PUBLIC_FOLDER } from "@env";

const Comment = ({ comment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentLikeCount, setCommentLikeCount] = useState(comment.likes.length);

  const image = PUBLIC_FOLDER + "profile-pics/" + comment.user.profile_picture;

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setCommentLikeCount((prev) => prev + 1);
    } else {
      setCommentLikeCount((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.commentContainer}>
      <Image source={{ uri: image }} style={styles.userImage} />
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{comment.user.name}</Text>
        <Text style={styles.commentText}>{comment.text}</Text>
      </View>
      <TouchableOpacity onPress={() => handleLike()}>
        <View style={styles.likeButton}>
          <Text style={styles.likeCounter}>{commentLikeCount}</Text>
          {isLiked ? (
            <Ionicons name="heart" size={20} color={COLORS.red} />
          ) : (
            <Ionicons name="heart-outline" size={20} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Comment;
