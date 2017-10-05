import mobx, { observable } from "mobx";

class ChatStore {
    @observable conversations = [];
    // @observable fullscreen = !
}

var chatstore = (window.chatstore = new ChatStore());

export default chatstore;