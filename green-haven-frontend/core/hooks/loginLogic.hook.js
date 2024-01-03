import { loggedInUser } from "../dataSource/localDataSource/user";
import { authDataSource } from "../dataSource/remoteDataSource/auth";
import { local } from "../helpers/localStorage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const useLogic = () => {

  const [error, setError] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async (credentials) => {
    try {
      const response = await authDataSource.login(credentials);

      console.log(response);

      local("token", response.data.token);

      const { user, token } = response.data;

      dispatch(
        loggedInUser({
          email: user.email,
          username: user.name,
          bio: user.bio,
          phoneNumber: user.phone_number,
          location: user.location,
          role: user.role,
          garden: user.garden,
          cart: user.cart,
          following: user.following,
          followers: user.followers,
          profilePicture: user.profile_picture,
        })
      );

      navigation.navigate("Main");
    } catch (error) {
      console.log(error);
      setError(error?.message);
    }
  };

  return { error, handleLogin };
};