import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Nav, Button } from 'react-bootstrap';
import { ProfileContext } from '../App';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import UpdatePostModal from './UpdatePostModal';
import CommentModal from './CommentModal';
import { deletePost, likePost } from '../features/posts/postsSlice';
import '../App.css';

export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [commentPostId, setCommentPostId] = useState(null);
    const dispatch = useDispatch();

    const handleClose = () => {
        setCurrentPost(null);
        setShow(false);
    };
    const handleShow = (post) => {
        setCurrentPost(post);
        setShow(true);
    };

    const handleShowCommentModal = (postId) => {
        setCommentPostId(postId);
        setShowCommentModal(true);
    };

    const handleCloseCommentModal = () => {
        setCommentPostId(null);
        setShowCommentModal(false);
    };

    const handleDelete = (postId) => {
        dispatch(deletePost(postId));
    };

    const handleLike = (postId) => {
        dispatch(likePost(postId));
    };

    const [key, setKey] = useState('posts');
    const profileData = useContext(ProfileContext);

    const renderPostImages = () => {
        return posts.map((post, index) => (
            <Col md={4} key={index} className="mb-4 image-grid-item">
                <div className="image-wrapper">
                    <Image
                        src={post.image}
                        alt={`Post ${index}`}
                        className="grid-image"
                        fluid
                    />
                </div>
                <div className="d-flex ">
                    <Button onClick={() => handleShow(post)} variant="outline-primary">
                        <i className='bi bi-pencil-square'></i>
                    </Button>
                    <Button onClick={() => handleDelete(post.id)} variant="outline-danger">
                        <i className="bi bi-trash"></i>
                    </Button>
                    <Button onClick={() => handleLike(post.id)} variant="outline-success">
                        <i className="bi bi-hand-thumbs-up"></i> {post.likes}
                    </Button>
                    <Button onClick={() => handleShowCommentModal(post.id)} variant="outline-info">
                        <i className="bi bi-chat"></i> {post.comments.length}
                    </Button>

                </div>
            </Col>
        ));
    };

    // Function to render reels images 
    const renderReelImages = () => {
        return profileData.reels.map((reel, index) => (
            <Col md={4} key={index} className="mb-4 image-grid-item">
                <div className="image-wrapper">
                    <Image
                        src={reel.image}
                        alt={`Reel ${index}`}
                        className="grid-image"
                        fluid
                    />
                </div>
            </Col>
        ));
    };

    // Function to render tagged images 
    const renderTaggedImages = () => {
        return profileData.tagged.map((tagged, index) => (
            <Col md={4} key={index} className="mb-4 image-grid-item">
                <div className="image-wrapper">
                    <Image
                        src={tagged.image}
                        alt={`Tagged ${index}`}
                        className="grid-image"
                        fluid
                    />
                </div>
            </Col>
        ));
    };

    return (
        <TabContainer id="image-grid" activeKey={key} onSelect={(k) => setKey(k)}>
            <Nav variant="tabs" className="justify-content-center mb-3">
                <Nav.Item>
                    <Nav.Link eventKey="posts">
                        <i className="bi bi-grid-3x3-gap-fill"></i> POSTS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="reels">
                        <i className="bi bi-play-circle"></i> REELS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tagged">
                        <i className="bi bi-person"></i> TAGGED
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent>
                <TabPane eventKey="posts">
                    <>
                        <Row>{renderPostImages()}</Row>
                        {currentPost && (
                            <UpdatePostModal
                                show={show}
                                handleClose={handleClose}
                                postId={currentPost.id}
                            />
                        )}
                        {commentPostId && (
                            <CommentModal
                                show={showCommentModal}
                                handleClose={handleCloseCommentModal}
                                postId={commentPostId}
                            />
                        )}
                    </>
                </TabPane>

                <TabPane eventKey="reels">
                    <Row>{renderReelImages()}</Row>
                </TabPane>
                <TabPane eventKey="tagged">
                    <Row>{renderTaggedImages()}</Row>
                </TabPane>
            </TabContent>
        </TabContainer>
    );
}
