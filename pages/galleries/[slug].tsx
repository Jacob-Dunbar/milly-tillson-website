import { createClient } from "contentful";
import type { GetStaticPaths, GetStaticProps } from "next";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "gallery",
  });

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { items } = await client.getEntries({
    content_type: "gallery",
    "fields.slug": params.slug,
  });

  return {
    props: {
      gallery: items[0],
    },
  };
};

const GalleryPage = ({ gallery }: any) => {
  const { name, images } = gallery.fields;

  return <div>{name}</div>;
};

export default GalleryPage;
