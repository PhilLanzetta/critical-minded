import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import AdditionalResourceTable from "../components/additionalResourceTable"
import Report from "../components/report"

const Reports = ({ data }) => {
  const { aboutText, additionalResources, reports } = data.contentfulIndexPage

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
    <Layout>
      <p className={styles.sectionTitle}>Reports</p>
      {reports.map(report => (
        <Report key={report.id} report={report}></Report>
      ))}
      <div
        className={styles.aboutSection}
        dangerouslySetInnerHTML={{ __html: aboutText.childMarkdownRemark.html }}
      ></div>
      <p className={styles.sectionTitle}>Additional Resources</p>
      <div className={styles.line}></div>
      <AdditionalResourceTable
        resources={additionalResources}
      ></AdditionalResourceTable>
    </Layout>
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

export default Reports
