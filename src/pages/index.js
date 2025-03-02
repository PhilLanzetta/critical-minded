import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import AdditionalResourceTable from "../components/additionalResourceTable"
import Report from "../components/report"

const IndexPage = ({ data }) => {
  const { aboutText, additionalResources, reports } = data.contentfulIndexPage

  useEffect(() => {
    navigate("/reports/")
  }, [])

  useEffect(() => {
    const body = document.body
    body.style.position = "fixed"
    const timer = setTimeout(() => {
      body.style.position = ""
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={styles.placeholder}></div>
  )
}

export const query = graphql`
  query {
    contentfulIndexPage {
      aboutText {
        childMarkdownRemark {
          html
        }
      }
      additionalResources {
        id
        title
        publishingOrganization
        year
        link
      }
      reports {
        id
        title
        issueText
        podcastLink
        pdfFile {
          file {
            url
          }
        }
        introText {
          childMarkdownRemark {
            html
          }
        }
        previewPageImages {
          id
          gatsbyImageData
          description
          height
          width
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Reports" />

export default IndexPage
