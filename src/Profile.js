import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { async } from "@firebase/util";
import { Routes, Route, NavLink } from "react-router-dom";
function Game3() {
  return (
    <div className="">
      <NavBar />
      <h1>We Will be back Soon... Where U could see the leader board</h1>
    </div>
  );
}

export default Game3;
