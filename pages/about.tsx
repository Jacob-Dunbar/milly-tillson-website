import React from "react";
import { StyledAbout } from "../components/Styled/About.style";
import type { GetStaticProps } from "next";
import { createClient } from "contentful";

const about = ({ about }: any) => {
  const { block1, block2 } = about[0].fields;
  return (
    <StyledAbout>
      <p>{block1}</p>
      <p>{block2}</p>
    </StyledAbout>
  );
};

export default about;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "about" });

  return {
    props: {
      about: res.items,
    },
  };
};
