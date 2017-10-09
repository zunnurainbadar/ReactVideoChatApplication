import mobx, { computed, observable, extendObservable, autorun } from "mobx";

class UserStore {

    @observable user = {};
    @observable allUsers = [];
}

var userstore = (window.userstore = new UserStore());

export default userstore;

// autorun(() => console.log(userstore.obj));