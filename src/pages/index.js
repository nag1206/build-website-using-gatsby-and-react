import * as React from "react";
import Layout from '../components/layout';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {imageWrapper} from '../styles/index.module.css';

export default function IndexPage() {
     const data = useStaticQuery(graphql`
             query GetBlogPosts {
               allMdx{
                   nodes {
                       id
                       slug
                       frontmatter {
                           title
                           
                   }
                 }
               }
             }
           `);

       const posts = data.allMdx.nodes;


  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage src="../images/bgv.jpg" alt={"morning rise"}
                     width={300}
                     height={300}
                     />
      </div>


      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">About this site</Link>


            <h2>Check out my recent blog posts</h2>
             <ul>
               {posts.map((post) => (
                 <li key={post.id}>
                   <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
                     <small>posted {post.frontmatter.date}</small>
                   </li>
               ))}
             </ul>
    </Layout>
  );
}