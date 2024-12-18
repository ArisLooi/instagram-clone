# Instagram Clone

A React-based Instagram clone that allows users to create, view, like, and comment on posts. Features include a profile header, image grid, post modals, and more.

## Features

- **Profile Header**: Displays user profile information including profile picture, name, posts, followers, and following count.
- **Image Grid**: Shows a grid of user posts with options to like, comment, and edit posts.
- **Post Modals**: Allows users to create new posts and update existing ones.
- **Comments**: Users can add comments to posts and view all comments in a modal.
- **Likes**: Users can like posts and see the like count.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ArisLooi/instagram-clone.git
    ```
2. Navigate to the project directory:
    ```bash
    cd instagram-clone
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

- **Profile Header**: Displays user profile information.
- **Image Grid**: Shows user posts with options to like, comment, and edit.
- **Add Post**: Click the plus icon to open the modal and create a new post.
- **Edit Post**: Click the pencil icon on a post to edit it.
- **Like Post**: Click the thumbs-up icon to like a post.
- **Comment on Post**: Click the comment icon to open the comment modal and add a comment.

## Components

### App.jsx

The main component that sets up the profile context and renders the profile header, image grid, and modals.

### postsSlice.js

Redux slice for managing posts, including actions for creating, updating, deleting, liking, and commenting on posts.

### AddPostModal.jsx
Component for creating new posts.

### CommentModal.jsx
Component for adding comments to posts.

### ImageGrid.jsx
Component for displaying the image grid with options to like, comment, and edit posts.

### ProfileHeader.jsx
Component for displaying the profile header with user information.

### UpdatePostModal.jsx
Component for updating existing posts.

### IconButton.jsx
Component for rendering icon buttons.

