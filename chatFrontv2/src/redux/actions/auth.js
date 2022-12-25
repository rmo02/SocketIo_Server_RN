import { saveUserData } from '../reducers/auth';
import store from '../store';


export function singUp(data) {
    store.dispatch(saveUserData(data))
}