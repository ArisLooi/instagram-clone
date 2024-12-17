import { Col, Image, Row } from "react-bootstrap";

export default function ProfileHeader() {
    return (
        <Row className="p-5">
            <Col md={3} className="d-flex align-items-center justify-content-center">
                <Image
                    src={"https://sig1.co/logo-1"}
                    style={{ height: "150px" }}
                    roundedCircle
                />
            </Col>
            <Col md={3}>Profile Description</Col>
        </Row>
    )
}