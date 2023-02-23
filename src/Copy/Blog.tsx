import react from "react";
export interface BlogPostsType {
  header: string;
  content: React.ReactElement;
  timePosted: string;
  tags: string[];
}
const BlogContentStyle = {
  color: "whitesmoke",
  padding: "3%",
};
export const BlogPosts: BlogPostsType[] = [
  {
    header: "First Post",
    content: (
      <div style={BlogContentStyle}>
        <p>Hello World!</p>
        <p>
          In this inaugural post I just wanted to say hi and welcome to my
          blog/website. This blog comes to you from my all-new website I just
          recently started building out. I had another site previously that I
          used as a combination portfolio and landing page for myself. However,
          when I was laid-off and revisted my website during my application
          process I found myself disatisfied with it. Therefore, to keep up my
          coding chops and give me something to do I made this site. As of
          writing this, I have received two job offers and have the intent of
          taking one. I got them before I could even get this site live. Which
          is great. Therefore, I am now shifting focus from 'holy shit get the
          site live' to 'let's make this something I like'.
        </p>
        <p>
          What do I mean by that? I wanted a site I was proud of. I also didn't
          necessarily want it to look like I could have just made it by going on
          wordpress and picking one of their free themes. I wanted a little
          personality. And to that end, I think I have done well. When I started
          this I told myself I wanted something 'tron' meets 'github dark mode'.
          Hopefully you can see some of that inspiration.
        </p>
        <p>
          Right now this is a static site (obviously) but if this ever gains
          traction it might be fun to give this a backend so people could
          comment. Until that day, you can always hit me up via my contact page
          to let me know your feelings.
        </p>
        <p>
          This is getting too long (maybe a read more divider is my next piece
          of functionality ;) ) but until then, you're stuck with this wall of
          text.
        </p>
        <p>Until next time,</p>
        <p>Zack</p>
      </div>
    ),
    timePosted: "02/23/23",
    tags: ["general", "life update"],
  },
];
