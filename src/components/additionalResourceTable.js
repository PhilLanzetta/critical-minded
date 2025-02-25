import React from "react"
import * as styles from "./additional.module.css"

const AdditionalResourceTable = ({ resources }) => {
  return (
    <div className={styles.resourceTable}>
      {resources.map(resource => (
        <div key={resource.id} className={styles.resourceRow}>
          <div className={styles.resourceInfo}>
            <p className={styles.resourceTitle}>{resource.title}</p>
            <div className={styles.resourcePubInfo}>
              <p className={styles.pubOrg}>{resource.publishingOrganization}</p>
              <p>{resource.year}</p>
            </div>
          </div>
          <a
            href={resource.link}
            target="_blank"
            rel="noreferrer"
            className={styles.resourceLink}
          >
            Read{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.703 14.703">
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
      ))}
    </div>
  )
}

export default AdditionalResourceTable
