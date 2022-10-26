import React from "react";
import { Text, View } from "react-native";
import AccountCreateScreen from "./View/screens/AccountCreateScreen";

export default function App(){
    return (
        <AccountCreateScreen url="http://localhost:4000/user" />
    );
}