import {Helmet} from 'react-helmet';
import PageBody from '../components/PageBody';
import { Colors } from '../consts';

const style = {
  display: 'block',
  // justifyContent: 'center',
  color: Colors.springBud,
}

const contentStyle = {
  justifyContent: 'center',
  display: 'flex'
}

const content = (
  <div style={style}>
    <Helmet>
      <title>Bad Houseplants</title>
      <meta name="description" content="Oi!" />
      <meta name="theme-color" content="#008f68" />
    </Helmet>

    <h1 style={contentStyle}>Bad Houseplants</h1>
    <p style={contentStyle}>-sound-music-production-mixing-</p>
    <br/>
    <p style={contentStyle}>
      
    </p>
  </div>
)

export default function Home() {
  return (
    <PageBody content={content} />
  );
}

