import mobx, { observable } from "mobx";

class ChatStore {
    @observable conversations = [];
    @observable conversationSelected = {};
    @observable messages = [];
    @observable roomToJoin = "";
    // @observable fullscreen = !
}

var chatstore = (window.chatstore = new ChatStore());

export default chatstore;