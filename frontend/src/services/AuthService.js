import axios from "axios";

import config from "./config";

export default class UserService {
    getEndpoint(path) {
        let endpoint = "http://" + config.api_host + ":" + config.api_port;
        if (path) endpoint += path;

        return endpoint;
    }

    login(credentials, onSuccess, onError) {
        axios({
            method: "post",
            url: this.getEndpoint("/user/login"),
            data: credentials,
            validateStatus: function(status) {
                return status === 200 ||  status === 400 || status === 401;
            }
        })
        .then(onSuccess)
        .catch(onError);         
    }

    signup(data, onSuccess, onError) {
        axios({
            method: "post",
            url: this.getEndpoint("/user"),
            data: data,
            validateStatus: function(status) {
                return status === 200 || status === 400 || status === 409;
            }
        })
        .then(onSuccess)
        .catch(onError);     
    }
}