import styled from "styled-components"
import Image from "next/image"
import { Product } from '../../utils/types/wooCommerceTypes'

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;

  return (
    <Card>
      <ImageContainer>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <Details>
        <span>{product.name}</span>
        <span>--</span>
        <span>
          <strong>{product.regular_price} zł</strong>
        </span>
      </Details>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  padding-bottom: 100%; /* forces square aspect ratio */
`;

const Details = styled.div`
  font-family: ${(props) => props.theme.font.body};
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5%;
  padding-bottom: 7%;
  display: flex;
  justify-content: center;
  gap: 12px;
`;