import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Nav, Button } from 'react-bootstrap';
import { ProfileContext } from '../App';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import UpdatePostModal from './UpdatePostModal';
import { deletePost } from '../features/posts/postsSlice';


export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const dispatch = useDispatch();

    const handleClose = () => {
        setCurrentPost(null);
        setShow(false);
    };
    const handleShow = (post) => {
        setCurrentPost(post);
        setShow(true);
    };

    const handleDelete = (postId) => {
        dispatch(deletePost(postId));
    };

    const [key, setKey] = useState('posts');
    const profileData = useContext(ProfileContext);

    const renderImages = (images) => {
        return images.map((image, index) => (
            <Col md={4} key={index} className="mb-4">
                <div style={{
                    width: '100%',
                    height: '400px', // Fixed height
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <Image
                        src={image}
                        alt={`Post ${index}`}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover'
                        }}
                        fluid
                    />
                </div>
                <div className="d-flex">
                    <Button onClick={() => handleShow(posts.find((post) => post.image === image))} variant="outline-primary">
                        <i className='bi bi-pencil-square'></i>
                    </Button>
                    <Button
                        onClick={() => {
                            const postToDelete = posts.find((post) => post.image === image);
                            if (postToDelete) handleDelete(postToDelete.id);
                        }}
                        variant="outline-danger"
                    >
                        <i className="bi bi-trash"></i>
                    </Button>
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
                        <Row>{renderImages(posts.map((post) => post.image))}</Row>
                        {currentPost && (
                            <UpdatePostModal
                                show={show}
                                handleClose={handleClose}
                                postId={currentPost.id}
                            />
                        )}
                    </>
                </TabPane>

                <TabPane eventKey="reels">
                    <Row>{renderImages(profileData.reels.map((reel) => reel.image))}</Row>
                </TabPane>
                <TabPane eventKey="tagged">
                    <Row>{renderImages(profileData.tagged.map((tagged) => tagged.image))}</Row>
                </TabPane>
            </TabContent>
        </TabContainer>
    );
}
