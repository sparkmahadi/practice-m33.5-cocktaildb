/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।  */

const loadPhotos = async(dataLength) =>{
    loadSpinner(true);
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url)
    const data = await res.json()
    displayPhotos(data, dataLength)
}

const loadAlbumDetails = async(photoid) =>{
    const url = `https://jsonplaceholder.typicode.com/albums/${photoid}`;
    const res = await fetch(url)
    const data = await res.json()
    displayAlbumDetails(data)
}

const displayAlbumDetails = (data) =>{
    // console.log(data.id)

    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = `Title: ${data.title.slice(0,20)}`;
    const albumId = document.getElementById('album-id');
    albumId.innerText = `Id: ${data.id}`;
}


const btnShowAll = document.getElementById('show-all');
const displayPhotos = (data, dataLength) =>{
    const lengthController = () =>{
        if(dataLength === 20){
            const newData = data.slice(0,20);
            return newData;
        }
        else{
            const newData = data;
            return newData;
        }
    }
    const returnedData = lengthController();
    newData = returnedData;
    console.log(newData)
    // console.log(newData)
    for(photo of newData){
        // console.log(photo)

        const parentDiv = document.getElementById('cards-div');
        const photoDiv = document.createElement('div');
        photoDiv.innerHTML=`
        <div class="col">
                  <div class="card">
                    <img src="${photo.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Title: ${photo.title.slice(0,30)}</h5>
                      <p>Photo Id: ${photo.id}</p>
                      <p>Album Id: ${photo.albumId}</p>
                        <button onclick='loadAlbumDetails(${photo.id})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Album Details</button>
                        
                    </div>
                  </div>
                </div>
        `
        parentDiv.appendChild(photoDiv)
    }


    if(data.length > 20){
        btnShowAll.classList.remove('d-none');
    }
    else{
        btnShowAll.classList.add('d-none')
    }

    loadSpinner(false);
}

const loadSpinner = (status) =>{
    const spinner = document.getElementById('spinner');
    if(status === true){
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add('d-none')
    }
}


document.getElementById('btn-load').addEventListener('click', function(){
    loadPhotos(20);
})

btnShowAll.addEventListener('click', function(){
    loadPhotos();
})
