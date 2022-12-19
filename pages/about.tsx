import React from "react";
import { StyledAbout } from "../components/Styled/About.style";

interface Props {
  about: {
    block1: string;
    block2: string;
  };
}

const about = ({ about }: Props) => {
  console.log(about);
  const { block1, block2 } = about;

  return (
    <StyledAbout>
      <p>{block1}</p>
      <p>{block2}</p>
    </StyledAbout>
  );
};

export default about;

export const getStaticProps = async () => {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query {
          aboutCollection {
            items {
              block1
              block2
            }
          }
          }
        `,
      }),
    }
  );

  if (!result.ok) {
    console.log(result);
    return {};
  }

  const { data } = await result.json();
  const about = data.aboutCollection.items[0];
  return {
    props: {
      about,
    },
  };
};
