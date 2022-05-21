import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Email extends jspb.Message {
  getSenderemail(): string;
  setSenderemail(value: string): Email;

  getSendername(): string;
  setSendername(value: string): Email;

  getSubject(): string;
  setSubject(value: string): Email;

  getMessageMap(): jspb.Map<string, string>;
  clearMessageMap(): Email;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    senderemail: string,
    sendername: string,
    subject: string,
    messageMap: Array<[string, string]>,
  }
}

