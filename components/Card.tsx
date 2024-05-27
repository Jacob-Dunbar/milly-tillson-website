import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { StyledCard } from "./Styled/Card.style";

interface Props {
  gallery: {
    imagesCollection: {
      items: Images;
    };
    name: string;
    order: number;
    slug: string;
  };
}

interface Image {
  name: string;
  url: string;
  width: number;
  height: number;
}

type Images = Image[];

const GalleryCard: React.FC<Props> = ({ gallery }) => {
  const { name, slug, imagesCollection } = gallery;

  return (
    <StyledCard>
      <Link href={"/galleries/" + slug}>
        <Image
          className="image"
          src={gallery.imagesCollection.items[0].url}
          quality={100}
          width={imagesCollection.items[0].width}
          height={imagesCollection.items[0].height}
          alt={name + "thumbnail"}
        />
        <h2>{name}</h2>
      </Link>
    </StyledCard>
  );
};

export default GalleryCard;
