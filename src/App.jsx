import { Col, Row } from "react-bootstrap";

export default function App() {
  return (
    <Row>
      <Col sm={1}>Sidebar</Col>
      <Col sm={11}>Main</Col>
    </Row>
  )
}