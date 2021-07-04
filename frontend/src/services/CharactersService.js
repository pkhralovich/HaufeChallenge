import axios from "axios";

import { getEndpoint, endpoints, getAuthorization } from "../helpers/api";

export default class CharactersService {
    get(page, onSuccess, onError) {
        axios({
            method: "get",
            url: getEndpoint(endpoints.GET_CHARACTERS),
            params: {
                page
            },
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

    like(character, onSuccess, onError) {
        axios({
            method: "post",
            url: getEndpoint(endpoints.LIKE_CHARACTER(character)),
            validateStatus: function(status) {
                return status === 200 ||  status === 401 || status === 409;
            },
            headers: {
                Authorization: getAuthorization()
            }
        })
        .then(onSuccess)
        .catch(onError);        
    }

    
    unlike(favourite, onSuccess, onError) {
        axios({
            method: "delete",
            url: getEndpoint(endpoints.UNLIKE_CHARACTER(favourite)),
            validateStatus: function(status) {
                return status === 200 ||  status === 401 || status === 404;
            },
            headers: {
                Authorization: getAuthorization()
            }
        })
        .then(onSuccess)
        .catch(onError);        
    }
}