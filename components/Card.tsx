import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { StyledCard } from "./Styled/Card.style";

const GalleryCard = ({ gallery, image }: any) => {
  const { name, order, slug } = gallery;

  return (
    <StyledCard>
      <Link href={"/galleries/" + slug}>
        <Image
          className="image"
          src={image}
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
