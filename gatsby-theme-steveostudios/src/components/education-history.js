import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./education-history.css";

const EducationHistory = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          education {
            organization
            subject
            startDate
            endDate
          }
        }
      }
    }
  `);

  const education = data.allDataJson.nodes[0].education;

  return (
    <div className="education-history">
      <h3>Education History</h3>
      <ul>
        {education.map((job, i) => (
          <li key={i}>
            <span className="dot-double"></span>
            <div>
              <h4>{job.organization}</h4>
              <p>{job.title}</p>
              <p className="dates">
                {job.startDate} - {job.endDate ? job.endDate : "Present"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationHistory;
