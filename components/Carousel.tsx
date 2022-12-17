import Image from "next/image";
import { StyledCarousel } from "./Styled/Carousel.style";

const Carousel = ({ images, name }: any) => {
  console.log(images);
  return (
    <StyledCarousel>
      {images.map((image: any, i: number) => (
        <div>
          <Image
            className="image"
            src={`https:${image.fields.file.url}`}
            fill
            alt={name}
          />
        </div>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
