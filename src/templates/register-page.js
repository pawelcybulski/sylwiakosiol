/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query RegisterQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        registerTitle
        registerHero {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Register = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const registerHero = frontmatter.registerHero
	? frontmatter.registerHero.childImageSharp.gatsbyImageData
	: ""

  return (
    <Layout className="therapy register">
      <Seo
        title="Sylwia Kosioł | Rejestracja"
        description="Rejestracja"
      />
			<div className="therapy_header grids col-1 sm-2">
				<div className="therapy_header--left">
					<h1 dangerouslySetInnerHTML={{ __html: frontmatter.registerTitle }}>
					</h1>
					<div className="therapy_blob">
						<div className="tk-blob tk-blob--alt">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
								<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
							</svg>
						</div>
					</div>
				</div>
				<div className="therapy_header--right">
					{registerHero ? (
						<GatsbyImage
							image={registerHero}
							alt="Rejestracja"
							className="featured-image"
						/>
					) : (
						""
					)}
				</div>
			</div>
      <div className="register_wrap">
        <div
          className="register_content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <iframe scrolling="no" frameborder="0" id="widget-preview-iframe" src="//www.znanylekarz.pl/ajax/marketing/doctor/widget/big_with_calendar/sylwia-kosiol?hide_branding=true" class="big_with_calendar"></iframe>
      </div>
    </Layout>
  )
}

export default Register
