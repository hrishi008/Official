function change(){
    document.getElementById("mydetails").style.display = "none"
 fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
       return data.json()
}).then((completedData)=>{
    let data1 =""
    completedData.map((curVal)=>{
       data1=`
       <div class="container text-center w-25">
    <div class="card">
        
        <div class="card-body">
          <h5 class="card-title">${curVal.name}</h5>
          <p class="card-text">${curVal.address.city} , ${curVal.website}</p>
          <p class="card-text">${curVal.email}</p>
          <button class="btn btn-dark" onclick="change()">Click to get data</button>
        </div>
      </div>
</div>
       `
    }); 
    document.getElementById("information").innerHTML =  data1
})
}
