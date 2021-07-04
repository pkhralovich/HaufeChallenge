export const endpoints = {
    GET_USER : "/user",
    SIGNUP : "/user",
    LOGIN : "/user/login",
    GET_CHARACTERS : "/characters",
    LIKE_CHARACTER : (charId) => "/character/" + charId + "/favourite",
    UNLIKE_CHARACTER : (favId) => "/character/favourite/"+favId
};

export const pages = {
    BASE : "/",
    LOGIN : "/login",
    SIGNUP : "/signup",
    CHARACTERS : "/characters" ,
    NOT_FOUND : "/notFound"
}

export function getAuthorization() {
    return "Bearer " + localStorage.getItem("token");
}

export function isAuthorized() {
    return localStorage.getItem("token");
}

export function setAuthorization(token) {
    localStorage.setItem("token", token);
}

export function getEndpoint(path) {
    let endpoint = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;
    if (path) endpoint += path;

    return endpoint;
}