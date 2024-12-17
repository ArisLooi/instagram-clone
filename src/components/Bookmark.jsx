import { Row, Col, Image } from 'react-bootstrap';

const Bookmark = () => {
    const images = [
        { src: 'https://picsum.photos/id/1/300/300', subtitle: 'Meet-ups' },
        { src: 'https://picsum.photos/id/2/300/300', subtitle: 'Reviews' },
        { src: 'https://picsum.photos/id/3/300/300', subtitle: 'Shoutouts' },
        { src: 'https://picsum.photos/id/4/300/300', subtitle: 'Hiring' },
        { src: 'https://picsum.photos/id/5/300/300', subtitle: 'Events' },
        { src: 'https://picsum.photos/id/6/300/300', subtitle: 'FAQs' },
        { src: 'https://picsum.photos/id/7/300/300', subtitle: 'Mentors' },
    ];


    return (<Row className="justify-content-center">
        {images.map((image, index) => (
            <Col key={index} className="text-center mb-4">
                <Image src={image.src} fluid roundedCircle style={{ width: "60px", height: "60px" }} />
                < p className="text-center mt-2" > {image.subtitle}</p>
            </Col >
        ))}
    </Row >
    );
};

export default Bookmark;