import { Metadata } from 'grpc-web';

const TIMEOUT_SECONDS = 10;

const getDeadLine = () => {
  const deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + TIMEOUT_SECONDS);
  return `${deadline.getTime()}`;
};

export const unaryMetadata: Metadata = {
  // deadline: getDeadLine(),
};
