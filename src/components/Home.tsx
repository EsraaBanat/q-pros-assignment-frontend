"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const buttonStyle = {
    fontWeight: "bold",
  };
  const backgroundStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?w=996&t=st=1702379689~exp=1702380289~hmac=a218dbf72aaecbbc762c878ed0f16962f79513f88217e65b9adca30fd37ff920")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    minHeight: "100vh",
  };
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={backgroundStyle}
    >
      <Grid item>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => router.push("/login")}
        >
          Log In
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          style={buttonStyle}
          onClick={() => router.push("/signup")}
        >
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
}
