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
        aboutPage {
          aboutSection {
            aboutSectionTitle
            aboutSectionSubtitle
            aboutSectionImage {
              childImageSharp {
                gatsbyImageData
              }
            }
						aboutSectionContent
          }
        }
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="about">
      <Seo title={frontmatter.title} description={excerpt} />

			{frontmatter.aboutPage.map(({ aboutSection, index }) => (
				<div key={index} class="about_section">
					<div class="about_header grids col-1 sm-2">
						<div class="about_header--left">
							<h2 dangerouslySetInnerHTML={{ __html: aboutSection.aboutSectionTitle }}></h2>
							<div class="about_blob">
								<div class="tk-blob tk-blob--alt">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
										<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
									</svg>
								</div>
								<h3 dangerouslySetInnerHTML={{ __html: aboutSection.aboutSectionSubtitle }}></h3>
							</div>
						</div>
						<div class="about_header--right">
							{aboutSection.aboutSectionImage ? (
								<GatsbyImage
									image={aboutSection.aboutSectionImage.childImageSharp.gatsbyImageData}
									alt="Featured image"
									className="featured-image"
								/>
							) : (
								""
							)}
						</div>
					</div>
					<div class="about_know-me-text">
						{aboutSection.aboutSectionContent}
					</div>
				</div>
			))}
    </Layout>
  )
}

export default AboutPage
