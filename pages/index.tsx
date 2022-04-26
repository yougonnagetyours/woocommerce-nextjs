import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";

import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";

import styled from "styled-components";
import BasicLayout from "../layout/Basic";

import ProductCard from "../components/productCard/productCard"

interface Props {
  products: Product[];
}

const Title = styled.h1`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Home(props: Props) {
  // destructure props //
  const { products } = props;

  console.log("--WooCommerce Products: ", products);

  return (
    <BasicLayout>
      <Title>Hello World !</Title>
      { products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </BasicLayout>
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