import Image from "next/image";
import { StyledCarousel } from "./Styled/Carousel.style";

const Carousel = ({ images, name }: any) => {
  console.log(images);
  return (
    <StyledCarousel>
      {images.map((image: any, i: number) => (
        <Image
          className="image"
          src={`https:${image.fields.file.url}`}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          alt={name}
        />
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
