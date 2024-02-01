/**
 * This file is for setting up the web socket http link for subscriptions
 */
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
    uri: "",
    options: {
        reconnect: true,
    },
});

export default wsLink;
