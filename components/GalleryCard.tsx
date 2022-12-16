import Link from "next/link";
import Image from "next/image";
import css from "../styles/GalleryCard.module.scss";

const GalleryCard = ({ gallery, image }: any) => {
  const { name, order, slug } = gallery.fields;
  console.log(image.fields.file.url);
  return (
    <Link href={"/galleries/" + slug}>
      <div className={css.galleryCard}>
        <Image
          className={css.galleryCard__image}
          src={`https:${image.fields.file.url}`}
          quality={50}
          fill
          alt={name + "thumbnail"}
        />
      </div>
      <h1>{name}</h1>
    </Link>
  );
};

export default GalleryCard;
