import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import get from "lodash/get";
import Helmet from "react-helmet";

import Layout from "../components/Layout";

// import "./legal/styles.css";

const IndexRoot = ({ data }) => {
  const siteTitle = get(data, "site.siteMetadata.title");
  const siteDescription = get(data, "site.siteMetadata.description");

  const post = get(data, "post");
  const isRoot = get(data, "post.fields.URI") == "root";

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: "de" }}
        meta={[{ name: "description", content: siteDescription }]}
        title={siteTitle}
      />
      <Layout isRoot={isRoot}>
        <h1>{post.frontmatter.title}</h1>

        <MDXProvider components={{}}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </React.Fragment>
  );
};

export default IndexRoot;

export const homeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorUrl
      }
    }
    post: mdx(fields: { URI: { eq: "root" } }) {
      id
      excerpt
      body
      fields {
        URI
      }
      frontmatter {
        title
        author
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
      wordCount {
        words
      }
    }
  }
`;
