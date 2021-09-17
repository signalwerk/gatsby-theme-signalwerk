import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import get from "lodash/get";
import Helmet from "react-helmet";

import Meta from "../../components/Meta";
import Layout from "../../components/Layout";
import "./styles.css";

const PostPage = ({ data }) => {
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
        <div className="post-single__meta">
          <Meta
            words={post.wordCount.words}
            author={post.frontmatter.author}
            date={post.frontmatter.date}
          />
        </div>
        <h1>{post.frontmatter.title}</h1>

        {post.frontmatter.description && (
          <div className="column__text">
            <h2 className="post-single__lead">
              {post.frontmatter.description}
            </h2>
          </div>
        )}

        <MDXProvider components={{}}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </React.Fragment>
  );
};

export default PostPage;

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    post: mdx(fields: { URI: { eq: $slug } }) {
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
