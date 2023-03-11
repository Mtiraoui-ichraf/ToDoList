import { ADD, DELETE, UPDATE } from "./type";

export const ADDED = (title) => {
    return {
        type: ADD,
        payload: title,
    }
}

export const UPDATED = (id, updatedtask) => {
    return {
        type: UPDATE,
        payload: {id, updatedtask}
    }
}

export const DELETED = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}
