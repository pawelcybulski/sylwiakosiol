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
      <Seo title="Sylwia Kosioł | O Mnie" description={excerpt} />

			{frontmatter.aboutPage.map(({ aboutSection, index }) => (
				<div key={index} className="about_section">
					{aboutSection.aboutSectionTitle ? (
						<div className="about_section-title">
							<h2 dangerouslySetInnerHTML={{ __html: aboutSection.aboutSectionTitle }}></h2>
						</div>
					) : (
						""
					)}
					<div className="about_header">
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
					<div className="about_know-me-text" dangerouslySetInnerHTML={{ __html: aboutSection.aboutSectionContent }}>
					</div>
				</div>
			))}
    </Layout>
  )
}

export default AboutPage
