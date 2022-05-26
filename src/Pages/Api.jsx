import React from "react";
import { useState,useEffect } from "react";

export const Api = () =>{

  const [image,setImage] = useState("");
  const [result,setResult] = useState([]);

  const Access_Key = "";

  const fetchImage = async () =>{
   const ImageData = await  fetch(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${Access_Key}`)
   const JsonImageData = ImageData.json();
   const ImageResult = JsonImageData.results;
  console.log(ImageResult);
  setResult(ImageResult);
  }

  useEffect=(()=>{
    fetchImage();
  },[]);

 return <>
         <div>
         <input className="jj" type="text" name="PhotoSearch " value={image} onChange={(e) => setImage(e.target.value)}/>
         <button  onclick={()=>{
              fetchImage()   
          }}>submitt</button> 
         </div>
   {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
     <div className="Card shadow-md">
     </div>
   </div> */}
</>
};
export default Api;