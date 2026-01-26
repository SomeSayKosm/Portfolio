import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../config/firebase';

import PostCard from '../shared/PostCard';

type PostCardDataType = {
  title: string,
  content: string,
  date: string,
  video?: {
    src: string,
    title: string,
  },
  image?: {
    src: string,
    title: string,
  }
}

const ProjectKickstep = () => {
  const [postCardData, setPostCardData] = useState<PostCardDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching docs from Firestore...");

      const querySnapshot = await getDocs(collection(database, "ProjectKickstepPosts"));
      const sortedData = querySnapshot.docs.map(doc => doc.data() as PostCardDataType).sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      setPostCardData(sortedData);
    };

    fetchData();
  }, []);

  return (
    <>
      { 
        postCardData.map((postData, index) => (
          <PostCard 
            key={index} data={postData} rightAligned={index % 2 === 1 ? true : false}
          />
        ))
      }
    </>
  );
};

export default ProjectKickstep;