import { USER_LOCALSTORAGE_KEY } from "./../const/localstorage";
import axios from "axios";


export const Api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
