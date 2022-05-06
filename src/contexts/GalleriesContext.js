import React, { useEffect, useState, useContext } from "react";
import { db } from "../Firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const GalleryContext = React.createContext(null);

export function useGallery() {
  return useContext(GalleryContext);
}

export const GalleryProvider = ({ children }) => {
  const galleriesCollectionRef = collection(db, "galleries");
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const getGalleries = async () => {
      const galleriesData = await getDocs(galleriesCollectionRef);
      setGalleries(
        galleriesData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getGalleries();
  }, []);

  return (
    <GalleryContext.Provider value={galleries}>
      {children}
    </GalleryContext.Provider>
  );
};
