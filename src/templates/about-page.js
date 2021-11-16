import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
				subtitle
        knowMe
        knowMeImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, width: 815, height: 655)
          }
        }
				knowMeText
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
		const knowMeImage = frontmatter.knowMeImage
	? frontmatter.knowMeImage.childImageSharp.gatsbyImageData
	: ""

  return (
    <Layout className="about">
      <Seo title={frontmatter.title} description={excerpt} />
			<div class="about_header grids col-1 sm-2">
				<div class="about_header--left">
					<h1>
						{frontmatter.title}
						<br/>
						<small>{frontmatter.subtitle}</small>
					</h1>
					<div class="about_blob">
						<div class="tk-blob tk-blob--alt">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
								<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
							</svg>
						</div>
						<h2 dangerouslySetInnerHTML={{ __html: frontmatter.knowMe }}></h2>
					</div>
				</div>
				<div class="about_header--right">
					{knowMeImage ? (
						<GatsbyImage
							image={knowMeImage}
							alt={frontmatter.title + " - Featured image"}
							className="featured-image"
						/>
					) : (
						""
					)}
				</div>
			</div>
			<div class="about_know-me-text">
				{frontmatter.knowMeText}
			</div>
    </Layout>
  )
}

export default AboutPage
