import axios from "axios";

import config from "./config";

export default class CharactersService {
    getEndpoint(path) {
        let endpoint = "http://" + config.api_host + ":" + config.api_port;
        if (path) endpoint += path;

        return endpoint;
    }

    get(page, onSuccess, onError) {
        axios({
            method: "get",
            url: this.getEndpoint("/characters"),
            params: {
                page
            },
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

    like(character, onSuccess, onError) {
        axios({
            method: "post",
            url: this.getEndpoint("/character/" + character + "/favourite"),
            validateStatus: function(status) {
                return status === 200 ||  status === 401 || status === 409;
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(onSuccess)
        .catch(onError);        
    }

    
    unlike(favourite, onSuccess, onError) {
        axios({
            method: "post",
            url: this.getEndpoint("/characters/favourite/:id"),
            params: {
                favourite
            },
            validateStatus: function(status) {
                return status === 200 ||  status === 401 || status === 404;
            }
        })
        .then(onSuccess)
        .catch(onError);        
    }
}