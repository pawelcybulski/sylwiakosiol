import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query TherapyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
				subtitle
				howItWorks
      }
    }
  }
`
const TherapyPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
				<div class="tk-blob">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
						<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
					</svg>
				</div>

				<div class="therapy_header">
					<h1>
						{frontmatter.title}
						{frontmatter.subtitle}
					</h1>
					{frontmatter.howItWorks}
				</div>
        <article dangerouslySetInnerHTML={{ __html: html }} />
				<div class="home-how">
				<div class="grids col-1 sm-2">
					<h2>Jak mogę <span class="underline">ci pomóc?</span></h2>
				</div>
				<div class="grids col-1 sm-3">
					<p>CHCĘ NAPRAWIĆ RELACJE</p>
					<p>CIERPIĘ NA DEPRESJĘ</p>
					<p>NIE RADZĘ SOBIE ZE STRESEM</p>
				</div>
				<div class="grids col-1 sm-3">
					<p>MĘCZĄ MNIE NATRĘCTWA</p>
					<p>PRZYTŁACZA MNIE LĘK</p>
					<p>CHCĘ WZMOCNIĆ SAMOOCENĘ</p>
				</div>
			</div>
      </div>
    </Layout>
  )
}

export default TherapyPage
