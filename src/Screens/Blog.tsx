import { BlogPost } from "../BlogPost/BlogPost";
import { BlogPosts } from "../Copy/Blog";

export const Blog = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      {BlogPosts.map((post) => (
        <BlogPost post={post} />
      ))}
    </div>
  );
};
