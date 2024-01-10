import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../assets/constants";
import styles from "./productModal.styles";

const ProductModal = ({ isVisible, onClose }) => {

  const validationSchema = Yup.object({
    description: Yup.string()
      .max(500, "Max 500 characters")
      .required("Required"),
    name: Yup.string().max(50, "Max 50 Characters").required("Required"), // Fixed the typo and added the missing parenthesis
    price: Yup.number()
      .required("Price is required")
      .positive("Number must be positive")
      .min(1, "Price must be at least $ 1"),
  });

  return (
    <Modal isVisible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Formik
          initialValues={{ description: "", price: 0, name: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <View>
              <View style={styles.inputs}>
                <Text style={styles.label}>Description</Text>
                <View
                  style={styles.inputWrapper(
                    touched.description ? COLORS.primary : COLORS.gray
                  )}
                >
                  <TextInput
                    placeholder="Description"
                    onFocus={() => setFieldTouched("description")}
                    onBlur={() => setFieldTouched("description", "")}
                    value={values.description}
                    onChangeText={handleChange("description")}
                  />
                </View>
                {touched.description && errors.description && (
                  <Text style={styles.errorMsg}>{errors.description}</Text>
                )}
              </View>

              {/* Name */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Name</Text>
                <View
                  style={styles.inputWrapper(
                    touched.name ? COLORS.primary : COLORS.gray
                  )}
                >
                  <TextInput
                    placeholder="Name"
                    onFocus={() => setFieldTouched("name")}
                    onBlur={() => setFieldTouched("name", "")}
                    value={values.name}
                    onChangeText={handleChange("name")}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errorMsg}>{errors.name}</Text>
                )}
              </View>

              {/* Price */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Price</Text>
                <View
                  style={styles.inputWrapper(
                    touched.price ? COLORS.primary : COLORS.gray
                  )}
                >
                  <TextInput
                    placeholder="Price"
                    onFocus={() => setFieldTouched("price")}
                    onBlur={() => setFieldTouched("price", "")}
                    value={values.price}
                    onChangeText={handleChange("price")}
                    keyboardType={
                      Platform.OS === "android" ? "numeric" : "number-pad"
                    }
                  />
                </View>
                {touched.price && errors.price && (
                  <Text style={styles.errorMsg}>{errors.price}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onClose}>
                  <Text style={styles.button}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.button} onPress={handleSubmit}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default ProductModal;
