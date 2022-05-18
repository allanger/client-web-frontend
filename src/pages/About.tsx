import {Helmet} from 'react-helmet';
import PageBody from '../components/PageBody';
import { Colors } from '../consts';
import FeedbackForm from '../components/FeedbackForm';

const style = {
  display: 'block',
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
    <p style={contentStyle}/>
    <FeedbackForm/>
  </div>
)

export default function Home() {
  return (
    <PageBody content={content} />
  );
}
