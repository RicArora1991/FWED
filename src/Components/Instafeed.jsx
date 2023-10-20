import React, { useState } from 'react'

export default function Instafeed() {
    const[selectedFile,setSelectedFile]=useState(null);
    const[photofeed, setPhotoFeed]=useState([1,2,3,4,5]);
    console.log(photofeed);
    const handleFileChange=(e)=>{
        setSelectedFile(e.target.files[0]);
    };

    const uploadPhoto=()=>{
        // if(selectedFile){
            const newPhotoFeed=[...photofeed];
            // const newPhotoFeed=photofeed;
            newPhotoFeed[3]='Hello'
            console.log('upload photo',newPhotoFeed);
            console.log('original array', photofeed);

        // }
    }
  return (
    <>
    <div>
      <h1>Instagram feed</h1>
    </div>

    {/* upload form */}
    <div id="upload_form">
      <input type="file" id="fileinput" onChange={handleFileChange}/>
      <button onClick={()=>uploadPhoto()}>Upload Photo</button>
    </div>

    {/* display pictires */}
    <div id="photoFeed" className="photo_feed">

    </div>
  </>
  )
}
