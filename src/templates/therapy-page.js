import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query TherapyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
				subtitle
				howItWorks
				aboutTherapy {
					aboutItem {
						aboutHeading
						aboutText
					}
				}
				aboutTherapyCta {
          ctaText
          ctaLink
				}
      }
    }
  }
`
const TherapyPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
	const heroImage = frontmatter.heroImage
	? frontmatter.heroImage.childImageSharp.gatsbyImageData
	: ""
  return (
    <Layout className="therapy">
      <Seo title="Sylwia Kosioł | O Terapii" description={excerpt} />
			<div className="therapy_header grids col-1 sm-2">
				<div className="therapy_header--left">
					<h1>
						{frontmatter.title}
						<br/>
						<small>{frontmatter.subtitle}</small>
					</h1>
					<div className="therapy_blob show_on-desktop">
						<div className="tk-blob">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
								<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
							</svg>
						</div>
						<h2 dangerouslySetInnerHTML={{ __html: frontmatter.howItWorks }}></h2>
					</div>
				</div>
				<div className="therapy_header--right">
					{heroImage ? (
						<GatsbyImage
							image={heroImage}
							alt={frontmatter.title + " - Featured image"}
							className="featured-image"
						/>
					) : (
						""
					)}
				</div>
					<div className="therapy_blob show_on-mobile">
						<div className="tk-blob">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
								<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
							</svg>
						</div>
						<h2 dangerouslySetInnerHTML={{ __html: frontmatter.howItWorks }}></h2>
					</div>
			</div>
			<div className="therapy_about-list">
				<ol>
					{frontmatter.aboutTherapy.map(({ aboutItem, index }) => (
						<li key={index}>
							<h3><strong>{aboutItem.aboutHeading}</strong></h3>
							<p>{aboutItem.aboutText}</p>
						</li>
					))}
				</ol>
				<Link
					to={frontmatter.aboutTherapyCta.ctaLink}
					className="button"
				>
					{frontmatter.aboutTherapyCta.ctaText}
				</Link>
			</div>
    </Layout>
  )
}
export default TherapyPage
