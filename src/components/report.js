import React from "react"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./report.module.css"

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.carouselSVG}
        viewBox="0 0 35.932 25.58"
      >
        <g
          id="Group_156"
          data-name="Group 156"
          transform="translate(-1830.016 -1199.441)"
        >
          <g
            id="Group_155"
            data-name="Group 155"
            transform="translate(1830.016 1200.254)"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M724.573,918.5h34.476"
              transform="translate(-724.573 -906.556)"
              fill="none"
              stroke="#fff"
              stroke-width="2.3"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M748.07,908.753l11.977,11.977L748.07,932.707"
              transform="translate(-725.742 -908.753)"
              fill="none"
              stroke="#fff"
              stroke-width="2.3"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className={props.addClassName}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to previous"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.carouselSVG}
        viewBox="0 0 35.931 25.58"
      >
        <g
          id="Group_162"
          data-name="Group 162"
          transform="translate(-49.544 -1204.441)"
        >
          <g
            id="Group_157"
            data-name="Group 157"
            transform="translate(1915.492 2429.462) rotate(180)"
          >
            <g
              id="Group_155"
              data-name="Group 155"
              transform="translate(1830.016 1200.254)"
            >
              <path
                id="Path_4"
                data-name="Path 4"
                d="M724.573,918.5h34.476"
                transform="translate(-724.573 -906.556)"
                fill="none"
                stroke="#fff"
                stroke-width="2.3"
              />
              <path
                id="Path_5"
                data-name="Path 5"
                d="M748.07,908.753l11.977,11.977L748.07,932.707"
                transform="translate(-725.742 -908.753)"
                fill="none"
                stroke="#fff"
                stroke-width="2.3"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

const Report = ({ report }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    variableWidth: true,
    nextArrow: <NextArrow addClassName={styles.nextArrow} />,
    prevArrow: <PrevArrow addClassName={styles.previousArrow} />,
  }

  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {report.previewPageImages?.map(image => {
            const imgWidth = (image.width * 60) / image.height
            return (
              <div
                key={image.id}
                style={{ width: `calc(${imgWidth}vh + 20px)` }}
                className={styles.slide}
              >
                <div className={styles.slideContainer}>
                  <GatsbyImage
                    image={image.gatsbyImageData}
                    alt={image.description}
                    style={{ height: "60vh", width: `${imgWidth}vh` }}
                  ></GatsbyImage>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className={styles.reportInfo}>
        <div className={styles.infoLeft}>
          <p className={styles.issueText}>{report.issueText}</p>
          <p className={styles.reportTitle}>{report.title}</p>
          <div className={styles.desktopInfoLinks}>
            <a
              href={report.pdfFile.file.url}
              target="_blank"
              rel="noreferrer"
              className={styles.resourceLink}
            >
              Download
            </a>
            <a
              href={report.podcastLink}
              target="_blank"
              rel="noreferrer"
              className={styles.resourceLink}
            >
              Podcast{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.703 14.703"
              >
                <path
                  id="icons8-external-link_1_"
                  data-name="icons8-external-link (1)"
                  d="M13.688,5V6.337h3.718L9.2,14.544l.961.961L18.366,7.3v3.718H19.7V5ZM5,7.673V19.7H17.03V11.015l-1.337,1.337v6.015H6.337V9.01h6.015l1.337-1.337Z"
                  transform="translate(-5 -5)"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className={styles.infoRight}
          dangerouslySetInnerHTML={{
            __html: report.introText.childMarkdownRemark.html,
          }}
        ></div>
        <div className={styles.mobileInfoLinks}>
            <a
              href={report.pdfFile.file.url}
              target="_blank"
              rel="noreferrer"
              className={styles.resourceLink}
            >
              Download
            </a>
            <a
              href={report.podcastLink}
              target="_blank"
              rel="noreferrer"
              className={styles.resourceLink}
            >
              Podcast{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.703 14.703"
              >
                <path
                  id="icons8-external-link_1_"
                  data-name="icons8-external-link (1)"
                  d="M13.688,5V6.337h3.718L9.2,14.544l.961.961L18.366,7.3v3.718H19.7V5ZM5,7.673V19.7H17.03V11.015l-1.337,1.337v6.015H6.337V9.01h6.015l1.337-1.337Z"
                  transform="translate(-5 -5)"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Report
