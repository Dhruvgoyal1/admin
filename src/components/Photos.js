// src/components/Photos.js
import React, { useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [photoURL, setPhotoURL] = useState("");

  const handleAddPhoto = (e) => {
    e.preventDefault();
    setPhotos([...photos, photoURL]);
    setPhotoURL("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Photos</h1>
      <form onSubmit={handleAddPhoto} className="space-y-4">
        <input
          type="text"
          placeholder="Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Photo
        </button>
      </form>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {photos.map((url, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden"
          >
            <img src={url} alt="Photo" className="w-full h-32 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
