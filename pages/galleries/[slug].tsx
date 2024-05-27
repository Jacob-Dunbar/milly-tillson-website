import { createClient } from "contentful";
import type { GetStaticPaths, GetStaticProps } from "next";
import Carousel from "../../components/Carousel";
import { StyledGallery } from "../../components/Styled/Gallery.style";

const GalleryPage = ({ gallery }: any) => {
  const { name, images } = gallery.fields;

  return (
    <StyledGallery>
      <Carousel images={images} name={name} />
      <h1>{name}</h1>
    </StyledGallery>
  );
};

const client: any = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
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

export const getStaticProps = async ({ params }: any) => {
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

export default GalleryPage;
