import React, { useEffect } from "react";
import { useState} from "react";
import  axios  from "axios";
import CardModal from "../Components/CardModal";


export const Api = () =>{

  const [image,setImage] = useState("");
  const [result,setResult] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchImage =  async () =>{
   await axios.get("https://api.unsplash.com/search/photos?page=20&query=`"+image+"`&client_id=ARxphRboIvQBnEXP5c7H5XzjHnoFXiaJ647ojHVIDck&per_page=60")
    .then((response)=>{
      setResult(response.data.results);
      console.log(response.data.results);
   })
  }
  
 return <>
    <div className="SearchBar">
    <input type="text" value={image} placeholder="Search your image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e)=>{setImage(e.target.value)}}/>
      <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={fetchImage}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    </div>

   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
     {result.map((value)=>{
       return<>
        <div className="Card shadow-md" key={value.id}>
        <img className="UnsplashImage" src={value.urls.small} alt="image"/>
        {isModalVisible && <CardModal key={value.id} setIsModalVisible={setModalVisible} id={value.id}  Name={value.user.name}/>}
        <button type="button" onClick={()=>{setModalVisible(true)}}class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button>
        </div>
        </>
      })}
   </div>
</>
};
export default Api;