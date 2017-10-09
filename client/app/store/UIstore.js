import mobx, { observable } from "mobx";

class Store {
    @observable newChatDrawerState = false;
    @observable conversationView = true;
    @observable videoCallView = false;
    @observable callView = false;


    // @observable fullscreen = !
}

var store = (window.store = new Store());

export default store;