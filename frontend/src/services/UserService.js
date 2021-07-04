import axios from "axios";

import { getEndpoint, endpoints, getAuthorization } from "../helpers/api";

export default class CharactersService {
    get(onSuccess, onError) {
        axios({
            method: "get",
            url: getEndpoint(endpoints.GET_USER),
            validateStatus: function(status) {
                return status === 200 ||  status === 401;
            },
            headers: {
                Authorization: getAuthorization()
            }
        })
        .then(onSuccess)
        .catch(onError);         
    }
}