import mobx, { computed, observable, extendObservable, autorun } from "mobx";

class UserStore {

    @observable user = {
        email: "zunnurain@gmail.com",
        fullname: "Zunnurain",
        id: "59d5d83af25597133c8c6ae1",
        username: "zunnurainbadar"
    };
}

var userstore = (window.userstore = new UserStore());

export default userstore;

// autorun(() => console.log(userstore.obj));