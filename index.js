const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

content = document.getElementById("content")
let newPost = ""

for(let i = 0;i < posts.length;i++){
    renderPost(i)
}
function renderPost(i){
    newPost = `
            <div class="post">
                <div class="top">
                    <img class="pfp" src="${posts[i].avatar}">
                    <div class="details">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-user" src="${posts[i].post}">
                <div class="icon-container">
                    <img class="icons" src="images/icon-heart.png">
                    <img class="icons" src="images/icon-dm.png">
                    <img class="icons" src="images/icon-comment.png">
                </div>
                <p class="likes">${posts[i].likes} likes</p>
                <p class="caption"><span class="user-name">${posts[i].username}</span> ${posts[i].comment}</p>
            </div>`
            
    content.innerHTML += newPost
}
