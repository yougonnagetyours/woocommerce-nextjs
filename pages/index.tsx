import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";

import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";

import styled from "styled-components";

import { NavLayout } from "../layout"
import { ProductGrid } from "../features"

interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  const { products } = props;

  console.log("--WooCommerce Products: ", products);

  return (
    <NavLayout title="Menu" description="Menu page">
      <ProductGrid products={products} />
    </NavLayout>
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