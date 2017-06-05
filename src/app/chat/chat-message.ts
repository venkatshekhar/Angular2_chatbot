export class ChatMessage {

    constructor(public sentBy: string, public message: string) {
        this.sentBy = sentBy;
        this.message = message;
    }
}
