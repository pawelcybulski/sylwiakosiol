/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BsArrowRight } from "react-icons/bs"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"


export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        pretitle
        title
        subtitle
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        ctaFirst {
          ctaText
          ctaLink
        }
        ctaSecond {
          ctaText
          ctaLink
        }
        aboutHomeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
				aboutTitle
				aboutDesc
        ctaAbout {
          ctaText
          ctaLink
        }
        aboutTherapyTitle
        aboutTherapySubtitle
        aboutTherapyImage {
          childImageSharp {
						gatsbyImageData
					}
        }
				helpLinks {
					helpLink {
						helpLinkText
						helpHref
					}
				}
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            heroImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const heroImage = frontmatter.heroImage
    ? frontmatter.heroImage.childImageSharp.gatsbyImageData
    : ""
	const aboutHomeImage = frontmatter.aboutHomeImage
    ? frontmatter.aboutHomeImage.childImageSharp.gatsbyImageData
    : ""
	const aboutTherapyImage = frontmatter.aboutTherapyImage
    ? frontmatter.aboutTherapyImage.childImageSharp.gatsbyImageData
    : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
        {icons.icon === "facebook" ? (
          <Link to={icons.url} target="_blank">
            <RiFacebookBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <Link to={icons.url} target="_blank">
            <RiTwitterFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <Link to={icons.url} target="_blank">
            <RiLinkedinBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <Link to={icons.url} target="_blank">
            <RiYoutubeFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <Link to={icons.url} target="_blank">
            <RiInstagramFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "rss" ? (
          <Link to={icons.url} target="_blank">
            <RiRssFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <Link to={icons.url} target="_blank">
            <RiGithubFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <Link to={icons.url} target="_blank">
            <RiTelegramFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <Link to={icons.url} target="_blank">
            <RiPinterestFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <Link to={icons.url} target="_blank">
            <RiSnapchatFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <Link to={icons.url} target="_blank">
            <RiSkypeFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <Link to={icons.url} target="_blank">
            <FaWordpress />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "dribbble" ? (
          <Link to={icons.url} target="_blank">
            <RiDribbbleFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <Link to={icons.url} target="_blank">
            <RiMediumFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "behance" ? (
          <Link to={icons.url} target="_blank">
            <RiBehanceFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "vk" ? (
          <Link to={icons.url} target="_blank">
            <FaVk />
          </Link>
        ) : (
          ""
        )}
      </div>
    )
  })
  return (
    <Layout>
      <Seo />
      <div className="home-banner grids col-1 sm-2">
        <div className="home-banner_text">
					<p>{frontmatter.pretitle}</p>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.subtitle}</p>
          <div className="description" dangerouslySetInnerHTML={{ __html: html }}/>

					<div className="home-banner_links show_on-desktop">
						<Link
							to={frontmatter.ctaFirst.ctaLink}
							className="button"
						>
							{frontmatter.ctaFirst.ctaText}
						</Link>

						<Link
							to={frontmatter.ctaSecond.ctaLink}
							className="anchor"
						>
              <BsArrowRight />
              {frontmatter.ctaSecond.ctaText}
						</Link>
					</div>
        </div>
        <div className="home-banner_image">
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
					<div className="home-banner_links show_on-mobile">
            <div  className="social-icons" sx={indexStyles.socialIcons}>
              {sIcons}
            </div>
						<Link
							to={frontmatter.ctaFirst.ctaLink}
							className="button"
						>
							{frontmatter.ctaFirst.ctaText}
						</Link>

						<Link
							to={frontmatter.ctaSecond.ctaLink}
							className="anchor"
						>
              <BsArrowRight />
              {frontmatter.ctaSecond.ctaText}
						</Link>
					</div>
      </div>
			<div className="home-about">
				<div className="home-about_content">
					<div className="home-about_image">
						{aboutHomeImage ? (
							<GatsbyImage
								image={aboutHomeImage}
								alt={" Sylwia Kosioł "}
								className=""
							/>
						) : (
							""
						)}
					</div>
					<div className="home-about_desc">
            <div className="home-about_header">
              <h2>{frontmatter.aboutTitle}</h2>
            </div>
						<p>
							{frontmatter.aboutDesc}
						</p>
						<Link
						to={frontmatter.ctaAbout.ctaLink}
						className="button"
					>
						{frontmatter.ctaAbout.ctaText}
					</Link>
					</div>
				</div>
			</div>
			<div className="home therapy therapy_header grids col-1 sm-2">
				<div className="therapy_header--left">
          <h2 className="therapy_header--help" dangerouslySetInnerHTML={{ __html: frontmatter.aboutTherapyTitle }}></h2>
					<div className="therapy_blob show_on-desktop">
						<div className="tk-blob tk-blob--alt">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
								<path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
							</svg>
						</div>
						<h3 dangerouslySetInnerHTML={{ __html: frontmatter.aboutTherapySubtitle }}></h3>
					</div>
				</div>
				<div className="therapy_header--right therapy_header--help_image">
					{aboutTherapyImage ? (
						<GatsbyImage
							image={aboutTherapyImage}
							alt="Featured image"
							className="featured-image"
						/>
					) : (
						""
					)}
				</div>
        <div className="therapy_blob show_on-mobile">
          <div className="tk-blob tk-blob--alt">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
              <path d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"></path>
            </svg>
          </div>
          <h3 dangerouslySetInnerHTML={{ __html: frontmatter.aboutTherapySubtitle }}></h3>
        </div>
			</div>
			<div className="therapy_links">
				<ul className="grids col-2 sm-3">
					{frontmatter.helpLinks.map(({ helpLink, index }) => (
						<li key={index}>
							<a href={helpLink.helpHref}>{helpLink.helpLinkText}</a>
						</li>
					))}
				</ul>
			</div>
      {/* <BlogListHome data={posts} /> */}
    </Layout>
  )
}

export default HomePage


const indexStyles = {
  socialIcons: {
    "a":{
      color: "socialIcons",
      ":hover":{
        color:"socialIconsHover",
      }
    }
  }
}
