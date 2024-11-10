import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [average, setAverage] = useState<number | null>(null);
  const [alertMessage, setAlertMessage] = useState(""); 

  const validateInputs = () => {
    
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !num1 ||
      !num2 ||
      !num3
    ) {
      setAlertMessage("Please fill in all the fields."); // Set alert message
      return false;
    }

    // Check if all marks are valid numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
      setAlertMessage("Please enter valid numbers for all subjects."); // Set alert message
      return false;
    }
    if (
      number1 < 0 || number1 > 100 ||
      number2 < 0 || number2 > 100 ||
      number3 < 0 || number3 > 100
    ) {
      setAlertMessage("Marks must be between 0 and 100.");
      return false;
    }

    setAlertMessage(""); // Clear alert message if validation passes
    return true;
  };

  const calculateAverage = () => {
    if (!validateInputs()) {
      return;
    }

    const avg = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    setAverage(avg);
    setAlertMessage(""); // Clear alert message after successful calculation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.title}>Enter Marks</Text>
      <TextInput
        style={styles.input}
        placeholder="Subject 1 Marks"
        keyboardType="numeric"
        value={num1}
        onChangeText={(text) => {
          const validNum = text.replace(/[^0-9.]/g, '');
          setNum1(validNum);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject 2 Marks"
        keyboardType="numeric"
        value={num2}
        onChangeText={(text) => {
          const validNum = text.replace(/[^0-9.]/g, '');
          setNum2(validNum);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Subject 3 Marks"
        keyboardType="numeric"
        value={num3}
        onChangeText={(text) => {
          const validNum = text.replace(/[^0-9.]/g, '');
          setNum3(validNum);
        }}
      />
      <Button title="Register & Calculate Average" onPress={calculateAverage} />
      {alertMessage ? ( // Conditionally render the alert message
        <Text style={styles.alert}>{alertMessage}</Text>
      ) : null}
      {average !== null && (
        <Text style={styles.result}>Average: {average.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "80%",
    borderRadius: 5,
  },
  alert: {
    marginTop: 20,
    fontSize: 18,
    color: "red", 
    textAlign: "center", 
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
  },
});

export default App;
