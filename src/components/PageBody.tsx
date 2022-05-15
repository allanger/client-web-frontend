import {Colors} from "../consts";
type PageBodyProps = {
  content: JSX.Element,
}; /* use `interface` if exporting so that consumers can extend */

const styleMain = {
  backgroundColor: Colors.stateGray,
  margin: '10px 10% 10px 10%',
  padding: "10px 10% 10px 10%",
  border: 'solid',
  borderColor: Colors.darkPurple,
  borderWidth: "2px",
}

function PageBody(props: PageBodyProps) {
  return (
    <div style={styleMain}>
      <div>
        {props.content}
      </div>
    </div>
  )
}


export default PageBody;
