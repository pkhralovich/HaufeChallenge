import axios from "axios";

import config from "./config";

export default class CharactersService {
    getEndpoint(path) {
        let endpoint = "http://" + config.api_host + ":" + config.api_port;
        if (path) endpoint += path;

        return endpoint;
    }

    get(onSuccess, onError) {
        axios({
            method: "get",
            url: this.getEndpoint("/user"),
            validateStatus: function(status) {
                return status === 200 ||  status === 401;
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(onSuccess)
        .catch(onError);         
    }
}