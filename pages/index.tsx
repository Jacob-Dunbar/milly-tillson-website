import Head from "next/head";
import type { GetStaticProps } from "next";
import { createClient } from "contentful";
import GalleryCard from "../components/Card";

import { StyledHome } from "../components/Styled/Home.style";

export default function Home({ galleries }: any) {
  return (
    <>
      <Head>
        <title>Milly Tillson | Home</title>
        <meta
          name="Milly Tillson Photography"
          content="professional e-commerce photography portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <StyledHome>
        {galleries.map((gallery: any) => {
          return <GalleryCard key={gallery.sys.id} gallery={gallery} />;
        })}
      </StyledHome>
    </>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query {
          galleryCollection {
            
            items {
              name
              order
              slug
              imagesCollection {
                items{
                  title
                  url
                  width
                  height
                }
              }
              sys {
                id
              }
            }
          }
        }
        `,
      }),
    }
  );

  const { data } = await result.json();
  const galleries = data.galleryCollection.items.sort(
    (a: any, b: any) => a.order - b.order
  );

  return {
    props: {
      galleries,
    },
    revalidate: 10,
  };
};

// export const getStaticProps: GetStaticProps = async () => {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({ content_type: "gallery" });

//   return {
//     props: {
//       galleries: res.items,
//     },
//   };
// };
