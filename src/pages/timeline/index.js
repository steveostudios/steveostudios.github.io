// import React from "react";
// // import GitGraph from "react-gitgraph";
// import "./style.css";

// class TimelinePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       commit: {}
//     };

//     this.updateCommit = this.updateCommit.bind(this);
//     this.initializeGraph = this.initializeGraph.bind(this);
//   }

//   componentDidMount() {
//     this.gitgraph.canvas.addEventListener("commit:mouseover", event => {
//       this.updateCommit(event.data);
//     });
//     this.gitgraph.canvas.addEventListener("commit:mouseout", event => {
//       this.updateCommit({});
//     });
//   }

//   updateCommit(data) {
//     this.setState({ commit: data });
//   }

//   initializeGraph(gitgraph) {
//     const yearCol = 0;
//     const schoolCol = 1;
//     const workCol = 2;
//     const sideCol = 3;

//     const year = gitgraph
//       .branch({
//         name: "life",
//         column: yearCol
//       })
//       .commit({ message: "1983" })
//       .commit({ message: "1984" })
//       .commit({ message: "1985" })
//       .commit({ message: "1986" })
//       .commit({ message: "1987" })
//       .commit({ message: "1988" })
//       .commit({ message: "1989" });
//     const school001 = gitgraph
//       .branch({
//         parentBranch: year,
//         name: "school",
//         column: schoolCol
//       })
//       .commit({
//         message: "Gordon McCaw Elementary"
//       });
//     year
//       .commit({ message: "1990" })
//       .commit({ message: "1991" })
//       .commit({ message: "1992" })
//       .commit({ message: "1993" })
//       .commit({ message: "1994" });
//     // year.commit({ message: "1995" });
//     school001.merge(year, { message: "1995" });
//     const school002 = gitgraph.branch({
//       parentBranch: year,
//       name: "school",
//       column: schoolCol
//     });
//     school002.commit({ message: "Burkholder Middle School" });
//     year.commit({ message: "1996" });
//     year.commit({ message: "1997" });
//     school002.merge(year, { message: "1998" });
//     const school003 = gitgraph.branch({
//       parentBranch: year,
//       name: "school",
//       column: schoolCol
//     });
//     school003.commit({ message: "Advanced Technology Academy - CADD program" });
//     year.commit({ message: "1999" });
//     const work001 = gitgraph.branch({
//       parentBranch: year,
//       name: "work",
//       column: workCol
//     });
//     work001.commit({ message: "Ethel M Chocolates - HR intern" });
//     year.commit({ message: "2000" });
//     work001.commit({ message: "Ethel M Chocolates - Engineering" });

//     year.commit({ message: "2001" });
//     work001.commit({ message: "Ethel M Chocolates - Web development" });
//     work001.merge(year, {
//       messageDisplay: false
//     });
//     const work002 = gitgraph.branch({
//       parentBranch: year,
//       name: "work",
//       column: workCol
//     });
//     work002.commit({
//       message: "Central Christian Church - Production Assistant"
//     });
//     school003.merge(year, { message: "2002" });
//     const school004 = gitgraph
//       .branch({
//         parentBranch: year,
//         name: "school",
//         column: schoolCol
//       })
//       .commit({
//         message: "University Nevada, Las Vegas - Film program"
//       });
//     year
//       .commit({ message: "2003" })
//       .commit({ message: "2004" })
//       .commit({ message: "2005" });
//     work002.merge(year, {
//       messageDisplay: false
//     });
//     school004.merge(year, { message: "2006" });
//     const work003 = gitgraph.branch({
//       parentBranch: year,
//       name: "work",
//       column: workCol
//     });
//     work003.commit({
//       message:
//         "Southeast Christian Church - Student Ministry Creative Media Designer"
//     });
//     const side001 = gitgraph
//       .branch({
//         parentBranch: year,
//         name: "work",
//         column: sideCol
//       })
//       .commit({ message: "joined Church Tech Talk" })
//       .commit({ message: "joined r58 design" });
//     year.commit({ message: "2007" }).commit({ message: "2008" });
//     side001.commit({ message: "r58 design became Digital Stache" });
//     year
//       .commit({ message: "2009" })
//       .commit({ message: "2010" })
//       .commit({ message: "2011" })
//       .commit({ message: "2012" })
//       .commit({ message: "2013" })
//       .commit({ message: "2014" })
//       .commit({ message: "2015" });
//     work003.merge(year, {
//       messageDisplay: false
//     });
//     const work004 = gitgraph
//       .branch({
//         parentBranch: year,
//         name: "work",
//         column: workCol
//       })
//       .commit({
//         message: "Download Youth Ministry - Developer"
//       });
//     year
//       .commit({ message: "2016" })
//       .commit({ message: "2017" })
//       .commit({
//         message: "2018",
//         details: "notice this!",
//         date: "some date, huh?!"
//       });
//   }

//   render() {
//     const myTemplateConfig = {
//       colors: ["#112233", "#FFcc33", "#cc33aa", "#00aaff"],
//       branch: { lineWidth: 4, spacingX: 18 },
//       commit: {
//         spacingY: -32,
//         dot: { size: 8 },
//         message: {
//           displayAuthor: false,
//           displayBranch: false,
//           tooltipDisplay: true,
//           displayHash: false,
//           font: "normal 12pt Rubik",
//           color: "#112233"
//         }
//       }
//     };

//     return (
//       <div>
//         <GitGraph
//           initializeGraph={this.initializeGraph}
//           ref={gitgraph => {
//             this.gitgraph = gitgraph;
//           }}
//           options={{
//             template: myTemplateConfig,
//             orientation: "vertical-reverse",
//             author: "Steve Stone<steveostudios@gmail.com>"
//           }}
//         />
//         <div
//           id="tooltips"
//           className={
//             this.state.commit.hasOwnProperty("message") ? "active" : ""
//           }
//         >
//           {this.state.commit.hasOwnProperty("message")
//             ? this.state.commit.message
//             : ""}
//         </div>
//       </div>
//     );
//   }
// }

// export default TimelinePage;