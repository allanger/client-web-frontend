/**
 * @fileoverview gRPC-Web generated client stub for postman
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_postman_v1_pb from '../proto/postman_v1_pb';


export class PostmanClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSendEmail = new grpcWeb.MethodDescriptor(
    '/postman.Postman/SendEmail',
    grpcWeb.MethodType.UNARY,
    proto_postman_v1_pb.Email,
    google_protobuf_empty_pb.Empty,
    (request: proto_postman_v1_pb.Email) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendEmail(
    request: proto_postman_v1_pb.Email,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendEmail(
    request: proto_postman_v1_pb.Email,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendEmail(
    request: proto_postman_v1_pb.Email,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postman.Postman/SendEmail',
        request,
        metadata || {},
        this.methodInfoSendEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postman.Postman/SendEmail',
    request,
    metadata || {},
    this.methodInfoSendEmail);
  }

}

