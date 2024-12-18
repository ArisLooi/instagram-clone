import { useContext, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../features/posts/postsSlice";
import { ProfileContext } from "../App";

export default function CommentModal({ show, handleClose, postId }) {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.posts.find((post) => post.id === postId));
    const { name } = useContext(ProfileContext);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            dispatch(addComment({ postId, comment: { text: comment, user: name } }));
            setComment("");
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add a comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="comment">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Write a comment..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </Form.Group>
                            <Button type="submit" variant="primary" style={{ width: "100%", marginTop: "10px" }}>Submit</Button>
                        </Form>
                        {post && post.comments.map((c, index) => (
                            <div key={index} className="mt-3">
                                <strong>{c.user}</strong>: {c.text}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}
