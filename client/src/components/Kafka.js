import React, { Component } from "react";
import "../styles/Kafka.css";
var stompClient = null;
const Stomp = require("stompjs");

var SockJS = require("sockjs-client");

export default class Kafka extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    SockJS = new SockJS("http://192.168.0.30:7007/ws");

    stompClient = Stomp.over(SockJS);

    stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected = () => {
    this.setState({
      data: []
    });

    console.log("connected");

    // Subscribing to the public topic
    stompClient.subscribe("/topic/public", this.onMessageReceived);
  };

  onError = error => {
    console.log("error");

    this.setState({
      error:
        "Could not connect you to the Chat Room Server. Please refresh this page and try again!"
    });
  };

  onMessageReceived = msg => {
    var body = JSON.parse(msg.body);
    // console.log(msg.body);
    this.setState({
      data: body
    });

    // console.log("Payload is", msg);
  };

  render() {
    console.log(this.state.data);
    return (
      <div id="kafkamainContainer">
        {this.state.data.map(i => (
          <div id="kafka">
            <div>{i.tickerName}</div>

            <div id="kafka_index_price">
              {Number(i.closing).toFixed(2)}
              <span
                id={
                  String(i.changePercentage).charAt(0) == "-"
                    ? "change-ve"
                    : "changepositive"
                }
              >
                ({Number(i.changePercentage).toFixed(2)}%)
              </span>
              {String(i.changePercentage).charAt(0) == "-" ? (
                <span
                  class="fa fa-caret-down"
                  style={{ color: "#ff4d4d", margin: "5px" }}
                ></span>
              ) : (
                <span
                  class="fa fa-caret-up"
                  style={{ color: "#27ae60", margin: "5px" }}
                ></span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}