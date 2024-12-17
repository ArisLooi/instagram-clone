import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Image, Nav } from 'react-bootstrap';
import { ProfileContext } from '../App';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';


export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);

    const [key, setKey] = useState('posts');
    const profileData = useContext(ProfileContext);

    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
                <Image src={post.image} fluid />
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
                    <Row>{renderImages(profileData.posts.map((post) => post.image))}</Row>
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
