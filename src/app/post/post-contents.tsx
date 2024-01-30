import { PostData } from '@/cms/types/post-data';
import { useNavigate } from 'react-router-dom';
import style from './post.module.css';
import Items from '@/components/item/items';
import postsData from '@/cms/data/posts-data';
import { ItemProps } from '@/components/item/item';


interface PostContentsProps {
  postData: PostData;
}

const PostContents: React.FC<PostContentsProps> = ({ postData }) => {
  const navigate = useNavigate();

  const equivalentPosts = postsData[postData.id];

  const informationHeaderItemProps: ItemProps[] = [
    { type: "h5", label: postData.date },
    { type: "h5", label: postData.location.label },
    ...equivalentPosts.map(p => ({ type: "h5" as "h5", label: p.language.label, onClick: () => navigate(`/post/${p.slug}`) })),
  ]

  return (
    <section className="content">
      <div className="layer-text">
        <Items itemProps={informationHeaderItemProps} />
        <h2>{postData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </div>
    </section>
  )
}

export default PostContents;