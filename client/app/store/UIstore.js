import mobx, { observable } from "mobx";

class Store {
    @observable newChatDrawerState = false;
    @observable conversationView = true;
    @observable videoCallView = false;
    @observable callView = false;
    @observable alert = false;
    @observable alertSignup = false;
    @observable home = false;


    // @observable fullscreen = !
}

var store = (window.store = new Store());

export default store;