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
            gatsbyImageData(layout: FULL_WIDTH, width: 815, height: 655)
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
        therapyTypes {
          therapyType {
            therapyTypeTitle
            therapyTypeSubtitle
            therapyTypeId
            therapyTypeImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            therapyTypeList {
              therapyListText
            }
          }
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
      <Seo title={frontmatter.title} description={excerpt} />
			<div class="therapy_header grids col-1 sm-2">
				<div class="therapy_header--left">
					<h1>
						{frontmatter.title}
						<br/>
						<small>{frontmatter.subtitle}</small>
					</h1>
					<div class="therapy_blob">
						<div class="tk-blob">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
								<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
							</svg>
						</div>
						<h2 dangerouslySetInnerHTML={{ __html: frontmatter.howItWorks }}></h2>
					</div>
				</div>
				<div class="therapy_header--right">
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
			</div>
			<div class="therapy_about-list">
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
			<div class="therapy-types">
				{frontmatter.therapyTypes.map(({ therapyType, index }) => (
					<div key={index} id={therapyType.therapyTypeId}>
						<div class="therapy-types_header">
							<div class="tk-blob">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
									<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
								</svg>
							</div>
							<h2>
								{therapyType.therapyTypeTitle}
								<p>{therapyType.therapyTypeSubtitle}</p>
							</h2>
						</div>
						<div class="therapy-types_mid">
							<p>
								TERAPIA JEST
								<span class="text-float-left">DLA</span>
								<strong class="text-special">ciebie</strong>
								<span class="text-float-right">GDY:</span>
							</p>
							{therapyType.therapyTypeImage ? (
								<GatsbyImage
									image={therapyType.therapyTypeImage.childImageSharp.gatsbyImageData}
									alt="Featured image"
									className="featured-image"
								/>
							) : (
								""
							)}
						</div>
						<ul class="therapy-types_list">
							{therapyType.therapyTypeList.map(({ therapyListText, index }) => (
								<li key={index} class="therapy-types_list-item">
									{therapyListText}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
    </Layout>
  )
}
export default TherapyPage
