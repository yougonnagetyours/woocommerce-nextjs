import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";

import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";

import styled from "styled-components";

import ProductCard from "../components/productCard/productCard"

interface Props {
  products: Product[];
}

const Title = styled.h1`
  /* color: red; */
  /* font-family: 'Water Brush', cursive; */
`;

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  console.log("--WooCommerce Products: ", products);

  return (
    <>
      <Title>Hello World !</Title>
      { products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    revalidate: 60 
  };
};