function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; 
    for (let i = 0; i < 10; i++) {
        const post = posts[i];
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User: ${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}
