let dataList=[];
let ano=[];
let queryWord='don';
function doit(){console.log('OUTPUT : ','Enter');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWRpKtpX6TPQ4FXb07aiK8fqG8fdJCvM0&q=${queryWord}&part=snippet`, requestOptions)
    .then(response => response.json())
    .then(res => {console.log(res.items[0]);
        ano=res.items;
        console.log(ano);
        console.log(dataList);}).catch(error => console.log('error', error));

}
function ab(){
    console.log(ano);
    for(let i=0;i<ano.length;i++){
        console.log(1);
    let videoId=ano[i].id.videoId;
    let jsonObj={videoId:'',vidSrc:'',imgsrc:'',title:'',description:''};
    console.log(jsonObj);

    jsonObj.videoId=videoId;
    console.log(jsonObj);

        jsonObj.vidSrc=`https://www.youtube.com/embed/${videoId}`;
        jsonObj.imgsrc=`https://i.ytimg.com/vi/${videoId}/hq720.jpg`;
        jsonObj.title=`${ano[i].snippet.title}`;
        jsonObj.description=`${ano[i].snippet.description}`;
        console.log(jsonObj);
        dataList.push(jsonObj);}
        console.log(dataList);
}