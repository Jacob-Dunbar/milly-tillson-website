import { createClient } from "contentful";
import type { GetStaticPaths, GetStaticProps } from "next";
import css from "../../styles/Gallery.module.scss";
import Image from "next/image";

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
  console.log(images);
  return (
    <div className={css.gallery}>
      {/* <div className={css.gallery__imageContainer}>
        <Image src={`https:${images[0].fields.file.url}`} fill alt={name} />;
      </div> */}
      <h1 className={css.gallery__name}>{name}</h1>
      <div className={css.gallery__carousel}>
        {images.map((image: any) => (
          <div className={css.gallery__imageContainer}>
            <Image
              className={css.gallery__image}
              src={`https:${image.fields.file.url}`}
              fill
              alt={name}
            />
            ;
          </div>
        ))}
        <div className={css.gallery__imageContainer}>
          <Image
            className={css.gallery__image}
            src={`https:${images[1].fields.file.url}`}
            fill
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
