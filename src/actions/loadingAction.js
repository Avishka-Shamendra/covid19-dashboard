import { ACTION_TYPE_SET_FETCHING, ACTION_TYPE_UNSET_FETCHING } from "../constants"

export function setFetchingFlag() {
    return {type: ACTION_TYPE_SET_FETCHING}
}
export function unsetFetchingFlag() {
    return {type: ACTION_TYPE_UNSET_FETCHING}
}