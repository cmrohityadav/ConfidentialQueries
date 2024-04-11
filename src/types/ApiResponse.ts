import { Message } from "@/model/User";
export interface ApiResponse{
    succss:boolean,
    message:string,
    isAcceptingMessage?:boolean,
    messages?:Array<Message>,

}