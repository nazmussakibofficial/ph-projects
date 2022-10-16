function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

loadComments();

function displayComments(comments) {
    comments = comments.slice(0, 21)
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        console.log(comment);
        commentDiv.innerHTML = `
            <h4>User-${comment.postId}</h4>
            <h5>Comment: ${comment.name}</h5>
            <p>Comment Description: ${comment.body}</p>
            <button onclick="loadCommentDetail(${comment.postId})">Details</button>
        `;
        commentsContainer.appendChild(commentDiv);
    }
}

const loadCommentDetail = (id) => {
    // console.log('get details of id', idMeal);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentDetails(data));
}

const displayCommentDetails = comment => {
    console.log(comment);
    const commentDetail = document.getElementById('detail-container');
    commentDetail.innerHTML = `
        <h2>Details: ${comment.title}</h2>
        <p>${comment.body}</p>
    `
}

