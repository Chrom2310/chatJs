interface IMessage {
  user: string,
  note: string,
}

interface IChat {
    getList: () => IMessage[],
    addMessage: (message:IMessage) => IMessage[],
    valideteMessage: (message: Partial<IMessage>) => boolean,
}

class Chat implements IChat {
    private messages:IMessage[] = [];
    getList() {
        return this.messages;
    }

    addMessage(message:IMessage) {
        this.messages.push(message);
        return this.messages;
    }

    valideteMessage(message: Partial<IMessage>) {
        console.log('message', message)
        if (message?.note && message?.user ) {
            return true;
        }
        return false;
    }
}

const chat = new Chat();

export default chat;