// src/components/OnePost.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
//import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(client);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div className="spinner"></div>;

  return (
    <>
      <h2 className="onepost-title">{postData.title}</h2>
      <div className="onepost">
        <div className="onepost-ctn">
          {/* <div>
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Kap"
          />
          <h4>{postData.name}</h4>
        </div> */}
          <div className="onepost-body">
            <BlockContent
              blocks={postData.body}
              projectId={client.projectId}
              dataset={client.dataset}
            />
          </div>
        </div>

        {/* <img src={urlFor(postData.mainImage).width(200).url()} alt="" /> */}
      </div>
    </>
  );
}
