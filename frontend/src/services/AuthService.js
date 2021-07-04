import axios from "axios";

import { getEndpoint, endpoints } from "../helpers/api";

export default class UserService {
    login(credentials, onSuccess, onError) {
        axios({
            method: "post",
            url: getEndpoint(endpoints.LOGIN),
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
            url: getEndpoint(endpoints.SIGNUP),
            data: data,
            validateStatus: function(status) {
                return status === 200 || status === 400 || status === 409;
            }
        })
        .then(onSuccess)
        .catch(onError);     
    }
}