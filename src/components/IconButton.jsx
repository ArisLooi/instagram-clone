import { Button } from "react-bootstrap";

export default function IconButton({ isTop, isBottom, className, onClick, imageUrl }) {
    let margin = "light";

    if (isTop) {
        margin = "light my-4";
    } else if (isBottom) {
        margin = "light mt-auto mb-3";
    }

    return (
        <Button variant={margin} style={{ marginBottom: "7px" }} onClick={onClick}>
            {imageUrl ? (
                <img src={imageUrl} alt="profile" style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
            ) : (
                <i className={className} style={{ "font-size": "24px" }}></i>
            )}
        </Button >
    );
}