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
}

type Images = Image[];

const GalleryCard: React.FC<Props> = ({ gallery }) => {
  const { name, order, slug } = gallery;
  const Thumbnail = gallery.imagesCollection.items[0].url;

  return (
    <StyledCard>
      <Link href={"/galleries/" + slug}>
        <Image
          className="image"
          src={Thumbnail}
          quality={50}
          fill
          alt={name + "thumbnail"}
        />

        <h2>
          {name}
          <AiOutlineArrowRight />
        </h2>
      </Link>
    </StyledCard>
  );
};

export default GalleryCard;
