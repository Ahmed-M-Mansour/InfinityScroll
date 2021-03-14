const imageContainer = document.getElementById('image-container') ; 
const looder = document.getElementById('looder'); 

let ready = false ; 
let imagesLoaded = 0 ; 
let totalImages = 0 ; 
let phtpArray = [] ; 

// Unsplash API 
const apiKey = 'EnU5pZJuHC9lRw7Bmi5O-F27Zsi7XNCsKEBms9kJsrM' ; 
const count = 3 ; 
const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}` ; 


// check if the image is loaded 
function imageLoaded() {
    imagesLoaded++ ; 
    if(imagesLoaded === totalImages ) 
    {
        ready = true ; 
        looder.hidden = true ; 
    }
  }
// to create elements for links and images , then  Add it to the DOM 
function displayPhotos(){
    imagesLoaded = 0 ; 
    totalImages = phtpArray.length ; 
    console.log('Total Images --' , totalImages );
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
         // Event lissitner , check when ach function is loading 
         img.addEventListener('load' , imageLoaded) ; 
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

// checking to see if scrolling near the botton 
window.addEventListener('scroll' , ()=>{
    if(window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 && ready ){
        ready = false ; 
        getPhotos() ; 
    }
})
//  on looding 
getPhotos() ; 