import mobx, { observable } from "mobx";

class ChatStore {
    @observable conversations = [];
    @observable conversationSelected = {};
    @observable messages = [];
    @observable roomToJoin = "";
    @observable isBusy = false;
    @observable dialogOpen = false;
    @observable callingDialogOpen = false;
    @observable videoCall = false;
    @observable call = false;
    @observable from = '';
    @observable to = '';
    @observable answer = false;
    @observable receivedCall = false;
    @observable callTo = '';
    @observable callFrom = '';
    @observable allOn = true;
    @observable videoOff = false;
    @observable micOff = false;
    @observable busyDialogOpen = false;
    // @observable fullscreen = !
}

var chatstore = (window.chatstore = new ChatStore());

export default chatstore;