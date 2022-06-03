import PageBody from '../components/PageBody';
import {Colors} from '../consts';
import {Helmet} from 'react-helmet';
import background from "../assets/me.jpg";
import logo from "../assets/logo.png";
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
  justifyContent: "center",
  alignItems: "center",
}

const logoStyle = {
  height: "100px",
  width: "200px",
  backgroundImage: `url(${logo})`
}

const content = (
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
        <form>
          <label>
            What do you want?
          <select>
            <option value="Mixing">Grapefruit</option>
            <option value="Fast Mixing">Lime</option>
            <option selected value="Beat from the stock">Coconut</option>
            <option value="Custom beat/arrangement">Mango</option>
          </select>
          </label>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    <div>

    </div>
  </div>
)

export default function Home() {
  return (
    content
  );
}
