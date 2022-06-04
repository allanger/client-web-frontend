import { PostmanClient } from '../proto/proto/Postman_v1ServiceClientPb';

import { Email } from '../proto/proto/postman_v1_pb';
import { unaryMetadata } from './utils/metadata';

const PostmanClientApi = () => {
    const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
    // const client = new PostmanClient('http://rpc.badhouseplants.net:80');
    const client = new PostmanClient('https://rpc.badhouseplants.net:443');
    enableDevTools([
      client,
    ]);
    return {
        client: () => client,
        create: async (name, email, subject) => {
            const req = new Email()
            req.setSendername(name)
            req.setSenderemail(email)
            req.setSubject(subject)
            const res = await client.sendEmail(req, unaryMetadata);
            console.log(await res);
        },

        //     listSimple: (page = 0) => {
        //       return new Promise((resolve, reject) => {
        //         const result = [];
        //         const request = new Paging();

        //         request.setCount(10);
        //         request.setPage(page);

        //         const stream = client.listSimple(request, unaryMetadata);

        //         stream.on("data", (item) => result.push((item as any).toObject()));
        //         stream.on("status", () => resolve(result));
        //         stream.on("error", (err) => reject(err));
        //       });
        //     },
        //   };
    };
};
export default PostmanClientApi();
