import PostCard from '../shared/PostCard';

import { collection, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';
import { database } from '../config/firebase';

  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non facilisis justo, a malesuada erat. Quisque efficitur velit id lectus convallis cursus vitae nec orci. Pellentesque a eros eget quam condimentum rutrum. In volutpat leo tortor, in hendrerit diam ultrices aliquam. Donec ultricies elit ipsum, posuere vehicula neque tristique id. Nunc pharetra nec nibh volutpat imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non facilisis justo, a malesuada erat. Quisque efficitur velit id lectus convallis cursus vitae nec orci. Pellentesque a eros eget quam condimentum rutrum. In volutpat leo tortor, in hendrerit diam ultrices aliquam. Donec ultricies elit ipsum, posuere vehicula neque tristique id. Nunc pharetra nec nibh volutpat imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  date: "June 12, 2024",
async function fetchData() {
  console.log("Fetching all docs from Firestore...");
  const querySnapshot = await getDocs(collection(database, "test-collection"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
  
  console.log("Fetching single doc from Firestore...");
  const docRef = doc(database, "test-collection", "TestDoc");  
  const docSnap = await getDoc(docRef);
  if (docSnap) {
    console.log(docSnap.data());
  }
}

  fetchData();


const ProjectBlue = () => {
  return (
    <>
      { 
        PostCardData.map((postData, index) => (
        <PostCard 
            key={index} data={postData} rightAligned={index % 2 === 1 ? true : false}
        />
        ))
      }
    </>
  );
};

export default ProjectBlue;