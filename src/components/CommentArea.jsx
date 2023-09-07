import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  render() {
    return (
      <ListGroup>
        <ListGroup.Item>Dovrà essere visualizzato il commento</ListGroup.Item>
        <ListGroup.Item>Dovrà essere visualizzato il punteggio</ListGroup.Item>
      </ListGroup>
    );
  }
}
export default CommentArea;
