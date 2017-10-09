import mobx, { observable } from "mobx";

class Store {
    @observable newChatDrawerState = false;


    // @observable fullscreen = !
}

var store = (window.store = new Store());

export default store;