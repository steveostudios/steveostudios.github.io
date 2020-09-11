import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./work-history.css";

const WorkHistory = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          work {
            organization
            title
            startDate
            endDate
          }
        }
      }
    }
  `);

  const work = data.allDataJson.nodes[0].work;

  return (
    <div className="work-history">
      <h3>Work History</h3>
      <ul>
        {work.map((job, i) => (
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

export default WorkHistory;
