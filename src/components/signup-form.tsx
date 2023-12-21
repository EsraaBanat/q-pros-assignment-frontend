"use client";
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { signup } from "../pages/api/service";
import Swal from "sweetalert2";
export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleNameChange = (event: any) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event: any) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event: any) => {
    const password = event.target.value;
    setPassword(password);
  };

  const signUp = async (event: any) => {
    event.preventDefault();
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setEmailError(false);
    setPasswordError(false);
    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Please fill your email");
    } else if (!password) {
      setPasswordError(true);
      setPasswordErrorMessage("Please enter a password");
    } else if (!emailPattern.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email");
    } else if (!emailError && password) {
      try {
        const body = { name, email, password };
        await signup(body);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "you signed up successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const container: any = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: `url("https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?w=996&t=st=1702379689~exp=1702380289~hmac=a218dbf72aaecbbc762c878ed0f16962f79513f88217e65b9adca30fd37ff920") center / cover`,
  };
  const form = {
    width: "100%",
    marginTop: 1,
  };
  const submit = {
    fontWeight: "bold",
    margin: 2,
  };

  return (
    <div style={container}>
      <Container component="main" maxWidth="xs">
        <form style={form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? emailErrorMessage : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? passwordErrorMessage : ""}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
}
