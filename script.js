const imageContainer = document.getElementById('image-container') ; 
const looder = document.getElementById('looder'); 

let phtpArray = [] ; 

// Unsplash API 
const apiKey = 'EnU5pZJuHC9lRw7Bmi5O-F27Zsi7XNCsKEBms9kJsrM' ; 
const count = 1 ; 
const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}` ; 

// to create elements for links and images , then  Add it to the DOM 
function displayPhotos(){
    // Run function for each object in phtpArray
    phtpArray.forEach((photo)=>{
        // create <a>  to link to Unsplash website 
        const item = document.createElement('a') ; 
        item.setAttribute('href' , photo.links.html); 
        item.setAttribute('target' ,'_blank') ; 
        // create inage for photo 
        const img = document.createElement('img') ; 
        img.setAttribute('src' , photo.urls.regular); 
        img.setAttribute('alt' , photo.alt_description) ; 
        img.setAttribute('title' , photo.alt_description) ;  
        // put image iside <a> , then put the both inside image container 
        item.appendChild(img); 
        imageContainer.appendChild(item);
    })
}


// get photosfrom an  API 
 async function getPhotos(){
    try {
        const response = await fetch(url) ; 
        phtpArray = await response.json(); 
        console.log(phtpArray) ; 
        displayPhotos(); 

    }catch(erorr) {
        // catch erorr here 
        console.log(erorr);
    }
 }


//  on looding 
getPhotos() ; 