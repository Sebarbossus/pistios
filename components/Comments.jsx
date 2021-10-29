import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ article }) => {
  const disqusShortname = "pistios-com";
  const disqusConfig = {
    url: `https://www.pistios.com/article/${article.slug}`,
    identifier: article.slug, // Single post id
    title: article.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
