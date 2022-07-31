
var theme=document.querySelector('.theme');
var p=0;// for change theme
document.getElementById('searchButton').addEventListener('click',function(){
    var userName=document.getElementById('userName');
userName=userName.value;
searchUser(userName);
console.log("hmm");
})
theme.addEventListener('click',function(){
    if(p==1){
        document.querySelector('#style').href='light.css';
        document.getElementById('searchButton').setAttribute('class','btn btn-light text-primary');
        document.getElementById('lightButton').innerHTML=`<b style="cursor: pointer;">Light</b> <i class="bi bi-brightness-high text-warning"></i>`;
        p=0;
    }
    else{
        document.querySelector('#style').href='dark.css';
        document.getElementById('searchButton').setAttribute('class','btn btn-primary text-light');
        document.getElementById('lightButton').innerHTML=`<b style="cursor: pointer;">Dark</b> <i class="bi bi-moon-fill"></i>`;
        p=1;
    }
})
// const url=fetch("https://api.github.com/");
function searchUser(userName) { 
    fetch(`https://api.github.com/users/${userName}`)
    .then((res)=>res.json())
    .then((data)=>{ console.log(data); 
        document.getElementById('content').innerHTML=`
    <div class="col-3 text-center">
    <img src="${data['avatar_url']}" alt="" class="mx-auto rounded-circle">
   </div>
   <div class="col-9">
    <div class="row">
    <div class="col-4">
        <h5><b>${data['name']}</b></h5><br><a href="${data['html_url']}">@${data['login']}</a>
    </div>
    <div class="col-4"></div>
    <div class="col-4"><p>joining <b>${data['created_at']}</b></p></div>
</div>
<div class="row text-center">
    <p class="sec">${data['bio']}</p>
</div>
<div class="row text-center back p-4 rounded">
    <div class="col-4">
        <p class="sec">repos</p>
        <h6><b>${data['public_repos']}</b></h6>
    </div>
    <div class="col-4 border-start border-end border-secondary">
        <p class="sec">Followers</p>
        <h6><b>${data['followers']}</b></h6>
    </div>
    <div class="col-4">
        <p class="sec">Following</p>
        <h6><b>${data['following']}</b></h6>
    </div>
</div>
<div class="row my-3">
    <div class="col-6">
        <p><i class="bi bi-geo-alt-fill"></i>${data['location']}</p>
    </div>
    <div class="col-6">
        <p><i class="bi bi-twitter"></i>${data['twitter_username']}</p>
    </div>
    <div class="col-6">
        <p><i class="bi bi-link-45deg"></i>${data['repos_url']}</p>
    </div>
    <div class="col-6">
        <p><i class="bi bi-building"></i>${data['company']}</p>
    </div>
</div>
</div>`;})
   
}
















// innerHTML=` <div class="row">
// <div class="col-4">
//     <h5><b>The Octacat</b></h5><br><a href="">@octacat</a>
// </div>
// <div class="col-4"></div>
// <div class="col-4"><p>joining <b>Date</b></p></div>
// </div>
// <div class="row text-center">
// <p class="sec">bio not availabe</p>
// </div>
// <div class="row text-center back p-4 rounded">
// <div class="col-4">
//     <p class="sec">repos</p>
//     <h6><b>6</b></h6>
// </div>
// <div class="col-4 border-start border-end border-secondary">
//     <p class="sec">repos</p>
//     <h6><b>6</b></h6>
// </div>
// <div class="col-4">
//     <p class="sec">repos</p>
//     <h6><b>6</b></h6>
// </div>
// </div>
// <div class="row my-3">
// <div class="col-6">
//     <p>sanfrancisco</p>
// </div>
// <div class="col-6">
//     <p>sanfrancisco</p>
// </div>
// <div class="col-6">
//     <p>sanfrancisco</p>
// </div>
// <div class="col-6">
//     <p>sanfrancisco</p>
// </div>
// </div>`
