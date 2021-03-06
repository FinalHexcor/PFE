import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import EventIcon from "@material-ui/icons/Event";
import MapIcon from "@material-ui/icons/Map";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import BlockIcon from "@material-ui/icons/Block";
import Us from "../comp/Us";
import Missionmap from "../comp/Missionmap";
import Vehicule from "../comp/Vehicule";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Modal from "modal-enhanced-react-native-web";
import { Card, Button } from "react-native-elements";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreIcon from "@material-ui/icons/More";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  fab: {
    float: "center",
  },

  root: {},
}));

export default function User({ navigation }) {
  const pressM = () => {
    seta(false);
    seta2(true);
    seta3(false);
  };
  const pressM2 = () => {
    seta(false);
    seta2(false);
    seta3(true);
  };
  const pressM3 = () => {
    seta(true);
    seta2(false);
    seta3(false);
  };
  const [a, seta] = useState(true);
  const [a2, seta2] = useState(false);
  const [a3, seta3] = useState(false);
  const classes = useStyles();
  const hid = navigation.getParam("name");
  const hid2 = navigation.getParam("id");
  return (
    <View>
      {a && <Us name={hid} uid={hid2} />}
      {a2 && <Missionmap />}
      {a3 && <Vehicule />}
      <React.Fragment>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              onClick={pressM}
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MapIcon />
            </IconButton>
            <Fab
              onClick={pressM3}
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <EventIcon />
            </Fab>
            <div className={classes.grow} />

            <IconButton onClick={pressM2} edge="end" color="inherit">
              <LocalShippingIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  b: {
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 25,
  },
  txt2: {
    fontSize: 20,
  },
  c: {
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 140,
    bottom: 0,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 10,
  },
  list: {
    marginLeft: 20,
    marginRight: 20,
  },
  fab: {
    float: "center",
  },
});
