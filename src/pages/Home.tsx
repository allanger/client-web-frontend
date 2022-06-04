import { Colors } from '../consts';
import { Helmet } from 'react-helmet';
import background from "../assets/me.jpg";
import { useState } from 'react';
import { Email } from '../proto/proto/postman_v1_pb';
import PostmanClientApi from '../api/client';

const style = {
  display: 'block',
  // justifyContent: 'center',
  color: Colors.springBud,
}

const contentStyle = {
  justifyContent: 'center',
  margin: "auto",
  display: 'flex',
  width: '100%',
}
const rel: "relative" = "relative";

const subContentStyle = {
  margin: "5%",
  flex: 1,
}

const bannerStyle = {
  backgroundImage: `linear-gradient(0deg, rgba(150, 84, 135, 0.5), rgba(150, 84, 135, 0.8)), url(${background})`,
  height: "40vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: rel,
  zIndex: "-1",
  justifyContent: "center",
  alignItems: "center",
}

export default function Home(props: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (evt: any) => {
    evt.preventDefault()
    let emailReq: Email.AsObject = {
      sendername: name,
      senderemail: email,
      subject: service,
      messageMap: [
        ["text", message],
      ]
    }
    await PostmanClientApi.create(name, email, service);

  }
  return (
    <div style={style}>
      <Helmet>
        <title>Bad Houseplants</title>
        <meta name="description" content="Oi!" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div style={bannerStyle}>
      </div>
      <div style={contentStyle}>
        <div style={subContentStyle}>
          <h1>Well, hello there!</h1>
          <p>I am allanger: musician, sound engineer, beatmaker and producer.</p>
          <p>Currently I'm living in Duesseldorf and looking for local artists to work with.</p>
          <p>If you're based anywhere else, I still will be happy to mix your tracks,<br />provide some production tips or create beats and arrangements for you.</p>
          <br />
          <p>Since I don't have a huge portfolio and rich experience, I will do the first work for any artist for donation. <br />that means, that if you're not happy with what I've done, you don't have to pay</p>
          <h2>What exactly can I do?</h2>
          <h3>I can mix you track. </h3>
          <p>That includes limitless free revisions. If you like the result, you will receive the mixed version abd couple of mastered versions <br />I'm not a mastering guru but it will give you an understanding how your song can sound if it's loud enough. Or maybe you will like the mastered version so much <br />that you won't have look for a mastering engineer. Also I will write down everything I'm doing and that means that if you come to me one more time<br /> I will know already which effects fit your voice, or which frequencies should be cleaned up.</p>
          <h3>I can write music for you</h3>
          <p>That includes beats, arrangements, soundtracks, etc. Just send describe what you want, or send references. Currently I don't have any instruments except a midi keyboard, a laptop and a ukulele, so I'm doing mostly the electronic stuff. But I can write notes for acoustic instrument as well, or find out how to record them, if you wan't it very badly.</p>
        </div>
        <div style={subContentStyle}>
          <h1>Contact</h1>
          <form onSubmit={handleSubmit}>
            <label>
              What do you want?
              <select onChange={e => setService(e.target.value)}>
                <option value="Normal Mixing">Normal Mixing</option>
                <option value="Fast Mixing">Fast Mixing</option>
                <option value="Beat from the stock">Beat from the stock</option>
                <option value="Custom beat/arrangement">Custom beat/arrangement</option>
              </select>
            </label>
            <label>
              Name:
              <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              Your message:
              <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <div>

      </div>
    </div>

  );
}
