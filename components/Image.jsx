import { getStrapiMedia } from "../lib/media";
import styled, { css } from "styled-components";

const Img = styled.img`
  height: auto;
  max-width: ${({ maxWidth }) => maxWidth};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${({ isClickable }) =>
    isClickable &&
    css`
      transition: transform 0.9s;
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    `}

  @media(max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = ({
  image,
  maxWidth,
  borderRadius,
  margin,
  padding,
  isClickable,
}) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      maxWidth={maxWidth}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      isClickable={isClickable}
    />
  );
};

Image.defaultProps = {
  maxWidth: "280px",
  borderRadius: "0",
  margin: "0",
  padding: "5px",
};

export default Image;
