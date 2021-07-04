export const endpoints = {
    GET_USER : "/user",
    SIGNUP : "/user",
    LOGIN : "/user/login",
    GET_CHARACTERS : "/characters",
    LIKE_CHARACTER : (charId) => "/character/" + charId + "/favourite",
    UNLIKE_CHARACTER : (favId) => "/character/favourite/"+favId
};

export function getAuthorization() {
    return "Bearer " + localStorage.getItem("token");
}

export function setAuthorization() {
    localStorage.setItem("token");
}

export function getEndpoint(path) {
    let endpoint = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;
    if (path) endpoint += path;

    return endpoint;
}