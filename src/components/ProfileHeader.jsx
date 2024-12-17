import { Col, Row } from "react-bootstrap";

export default function ProfileHeader() {
    return (
        <Row>
            <Col md={3}>Profile Image</Col>
            <Col md={3}>Profile Description</Col>
        </Row>
    )
}