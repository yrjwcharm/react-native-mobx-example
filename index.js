/**
 * @format
 */

// import React, { Component } from "react";
import { AppRegistry } from "react-native";
// import Root from "./App";
import { name as appName } from "./app.json";
import Root from "./src";

AppRegistry.registerComponent(appName, () => Root);
