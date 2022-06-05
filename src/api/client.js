import { PostmanClient } from '../proto/proto/Postman_v1ServiceClientPb';

import { Email } from '../proto/proto/postman_v1_pb';
import { unaryMetadata } from './utils/metadata';

const PostmanClientApi = () => {
    const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => { });
    // const client = new PostmanClient('http://rpc.badhouseplants.net:80');
    const client = new PostmanClient('https://rpc.badhouseplants.net:443');
    enableDevTools([
        client,
    ]);
    return {
        client: () => client,
        create: async (name, email, subject, message, link) => {
            const req = new Email()
            let result = {
                response: "",
                err: ""
            }
            req.setSendername(name)
            req.setSenderemail(email)
            req.setSubject(subject)
            req.getMessageMap().set('message', message).set('link', link)

            const res = await client.sendEmail(req, unaryMetadata).catch(err => result.err = err.message)
            console.log(result)
            result.response = res
            return result
        },

    };
};
export default PostmanClientApi();
