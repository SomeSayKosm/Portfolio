import PostCard from '../shared/PostCard';

const PostCardData = {
  title: "Test Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non facilisis justo, a malesuada erat. Quisque efficitur velit id lectus convallis cursus vitae nec orci. Pellentesque a eros eget quam condimentum rutrum. In volutpat leo tortor, in hendrerit diam ultrices aliquam. Donec ultricies elit ipsum, posuere vehicula neque tristique id. Nunc pharetra nec nibh volutpat imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
  date: "June 12, 2024",
}

const ProjectBlue = () => {
  return (
        <PostCard 
        data={PostCardData}
        />
    );
};

export default ProjectBlue;