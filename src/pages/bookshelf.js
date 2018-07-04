import React from "react";
import Link from "gatsby-link";

import { withPrefix } from "gatsby-link";

const books = [
  {
    title: "Remote",
    subtitle: "",
    author: "Jason Fried and David Heinemeier Hansson",
    dateStart: "2018-05-29T10:00:00.000Z",
    dateFinish: null,
    publisher: "Crown Business",
    publisherUrl: "",
    stars: null,
    review: null,
    url:
      "https://www.amazon.com/gp/product/0804137501/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=&linkId=8a406edc2fe9394925c4e61b826ebf96",
    image: "/static/books/Remote.jpg"
  },
  {
    title: "Conversational Design",
    subtitle: "",
    author: "Erika Hall",
    dateStart: "2018-05-27T10:00:00.000Z",
    dateFinish: "2018-05-29T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 4,
    review: null,
    url: "https://abookapart.com/products/conversational-design",
    image: "/static/books/ConversationalDesign.png"
  },
  {
    title: "The New CSS Layout",
    subtitle: "",
    author: "Rachael Andrew",
    dateStart: "2018-05-15T10:00:00.000Z",
    dateFinish: "2018-05-27T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 4,
    review: null,
    url: "https://abookapart.com/products/the-new-css-layout",
    image: "/static/books/TheNewCSSLayout.png"
  },
  {
    title: "JavaScript: The Good Parts",
    subtitle: "",
    author: "Douglas Crockford",
    dateStart: "2018-05-02T10:00:00.000Z",
    dateFinish: "2018-05-15T10:00:00.000Z",
    publisher: "O'Reilly | Yahoo! Press",
    publisherUrl: "",
    stars: 5,
    review: null,
    url:
      "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=as_li_ss_tl?ie=UTF8&qid=1530649753&sr=8-1&keywords=javascript+the+good+parts&linkCode=ll1&tag=steveostudi0c-20&linkId=d126a9b8a6d772ee0c6532f35c44c388",
    image: "/static/books/JavaScriptTheGoodParts.jpg"
  },
  {
    title: "Rocket Surgery Made Easy",
    subtitle: "",
    author: "Steven Krugg",
    dateStart: "2018-04-02T10:00:00.000Z",
    dateFinish: "2018-04-29T10:00:00.000Z",
    publisher: "",
    publisherUrl: "",
    stars: 5,
    review: null,
    url:
      "https://www.amazon.com/Rocket-Surgery-Made-Easy-Yourself/dp/0321657292/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1530649852&sr=1-1&keywords=rocket+surgery+made+easy+steve+krug&linkCode=ll1&tag=steveostudi0c-20&linkId=031fcb032fd2ff1c178fd7ddb322a43c",
    image: "/static/books/RocketSurgeryMadeEasy.jpg"
  },
  {
    title: "Practical Design Discovery",
    subtitle: "",
    author: "Dan Brown",
    dateStart: "2018-03-02T10:00:00.000Z",
    dateFinish: "2018-03-29T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: "2018-03-02T10:00:00.000Z",
    review: "2018-03-29T10:00:00.000Z",
    url: "https://abookapart.com/products/practical-design-discovery",
    image: "/static/books/PracticalDesignDiscovery.png"
  },
  {
    title: "High Performance JavaScript",
    subtitle: "",
    author: "Nicholas C. Zakas",
    dateStart: "2018-01-01T10:00:00.000Z",
    dateFinish: "2018-03-02T10:00:00.000Z",
    publisher: "O'Reilly | Yahoo! Press",
    publisherUrl: "",
    stars: 3,
    review:
      "This isn't a knock on the book itself. Honestly, if I had read this when it first came out (2010) it would have been an easy 5! It's very practical, and super informative. However, many of the practices are outdated. For me, this book was more about fundamentals and a historical take on the Javascript performance.",
    url:
      "https://www.amazon.com/High-Performance-JavaScript-Application-Interfaces/dp/059680279X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1530649973&sr=1-3&keywords=high+performance+javascript&linkCode=ll1&tag=steveostudi0c-20&linkId=d770f21677181e67376ded3f912e5d36",
    image: "/static/books/HighPerformanceJavaScript.jpg"
  },
  {
    title: "HTML5 for Web Designers",
    subtitle: "",
    author: "Jeremy Keith and Rachel Andrew",
    dateStart: "2017-07-04T10:00:00.000Z",
    dateFinish: "2017-07-04T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/1e-html5-for-web-designers",
    image: "/static/books/HTML5ForWebDesigners.png"
  },
  {
    title: "CSS3 for Web Designers",
    subtitle: "",
    author: "Dan Cederholm",
    dateStart: "2017-07-04T10:00:00.000Z",
    dateFinish: "2017-07-04T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/css3-for-web-designers",
    image: "/static/books/CSS3ForWebDesigners.png"
  },
  {
    title: "Responsive Web Design",
    subtitle: "",
    author: "Ethan Marcotte",
    dateStart: "2017-07-04T10:00:00.000Z",
    dateFinish: "2017-07-04T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/responsive-web-design",
    image: "/static/books/ResponsiveWebDesign.png"
  },
  {
    title: "The Third Wave",
    subtitle: "An Entrepreneur's Vision of the Future",
    author: "Steve Case",
    dateStart: "2017-03-02T10:00:00.000Z",
    dateFinish: "2017-03-02T10:00:00.000Z",
    publisher: "Simon & Schuster",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/gp/product/150113258X/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=ll1&tag=steveostudi0c-20&linkId=67ea54caaf69f89104e5e71d6077da94",
    image: "/static/books/TheThirdWave.jpg"
  },
  {
    title: "Just Enough Research",
    subtitle: "",
    author: "Erika Hall",
    dateStart: "2016-11-30T10:00:00.000Z",
    dateFinish: "2016-11-30T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/just-enough-research",
    image: "/static/books/JustEnoughResearch.png"
  },
  {
    title: "Designing for Emotion",
    subtitle: "",
    author: "Aarron Walter",
    dateStart: "2017-01-30T10:00:00.000Z",
    dateFinish: "2017-01-30T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/designing-for-emotion",
    image: "/static/books/DesigningForEmotion.png"
  },
  {
    title: "Design for Real Life",
    subtitle: "",
    author: "Eric Meyer and Sara Wachter-Boettcher",
    dateStart: "2017-01-30T10:00:00.000Z",
    dateFinish: "2017-01-30T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/design-for-real-life",
    image: "/static/books/DesignForRealLife.png"
  },
  {
    title: "JavaScript for Web Designers",
    subtitle: "",
    author: "Mat Marquis",
    dateStart: "2016-11-30T10:00:00.000Z",
    dateFinish: "2016-11-30T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/javascript-for-web-designers",
    image: "/static/books/JavaScriptForWebDesigners.png"
  },
  {
    title: "Git for Humans",
    subtitle: "",
    author: "David Demaree",
    dateStart: "2016-09-26T10:00:00.000Z",
    dateFinish: "2016-09-26T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/git-for-humans",
    image: "/static/books/GitForHumans.png"
  },
  {
    title: "Practical SVG",
    subtitle: "",
    author: "Chris Coyier",
    dateStart: "2016-09-26T10:00:00.000Z",
    dateFinish: "2016-09-26T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 5,
    review: "",
    url: "https://abookapart.com/products/practical-svg",
    image: "/static/books/PracticalSVG.png"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Async & Performance",
    author: "Kyle Simpson",
    dateStart: "2016-02-15T10:00:00.000Z",
    dateFinish: "2016-02-15T10:00:00.000Z",
    publisher: "O'Reilly",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Performance-ebook/dp/B00TXVCJ7O/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-6&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=704aab462580c75d1dcb02f8429155c0",
    image: "/static/books/YouDontKnowJSAsyncAndPerformance.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Types & Grammar",
    author: "Kyle Simpson",
    dateStart: "2016-02-15T10:00:00.000Z",
    dateFinish: "2016-02-15T10:00:00.000Z",
    publisher: "O'Reilly",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Grammar/dp/1491904194/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-4&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=c2ff425aad937a761a3ffc888bfd69bb",
    image: "/static/books/YouDontKnowJSTypesAndGrammar.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "ES6 & Beyond",
    author: "Kyle Simpson",
    dateStart: "2016-02-15T10:00:00.000Z",
    dateFinish: "2016-02-15T10:00:00.000Z",
    publisher: "O'Reilly",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Beyond/dp/1491904240/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-5&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=456e4c3109e981dcb9fa0756da4ca3be",
    image: "/static/books/YouDontKnowJSES6AndBeyond.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Scope & Closures",
    author: "Kyle Simpson",
    dateStart: "2016-02-15T10:00:00.000Z",
    dateFinish: "2016-02-15T10:00:00.000Z",
    publisher: "O'Reilly",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Closures/dp/1449335586/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-2&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=a99c946afd2dc42e794eaa616ace0dec",
    image: "/static/books/YouDontKnowJSScopeAndClosures.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "this & Object Prototypes",
    author: "Kyle Simpson",
    dateStart: "2016-02-15T10:00:00.000Z",
    dateFinish: "2016-02-15T10:00:00.000Z",
    publisher: "O'Reilly",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Prototypes/dp/1491904151/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-3&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=146c129765a14c99d6b84d770b51f970",
    image: "/static/books/YouDontKnowJSThisAndObjectPrototypes.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Up & Going",
    author: "Kyle Simpson",
    dateStart: "2016-02-15T10:00:00.000Z",
    dateFinish: "2016-02-15T10:00:00.000Z",
    publisher: "O'Reilly",
    publisherUrl: "",
    stars: 5,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Going/dp/1491924462/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-1&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=640e8b51b5da0f9863662f31be4eb666",
    image: "/static/books/YouDontKnowJSUpAndGoing.jpg"
  }
];

class BookshelfPage extends React.Component {
  renderBook(book) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 1rem 1rem 0",
          alignItems: "start",
          fontFamily: "sans-serif",
          fontWeight: "200",
          fontSize: "0.75rem"
        }}
      >
        <a style={{ marginBottom: "0.25rem" }} href={book.url}>
          <img
            style={{ maxWidth: "100%", height: "220px", objectFit: "contain" }}
            src={withPrefix(book.image)}
          />
        </a>
        <div style={{ marginBottom: "0.25rem" }}>
          <a
            href={book.url}
            style={{ textDecoration: "none", fontWeight: "400" }}
          >
            {book.title}
          </a>
        </div>
        <div style={{ marginBottom: "0.25rem" }}>{book.subtitle}</div>
        <div style={{ marginBottom: "0.25rem" }}>{book.author}</div>
        {this.renderStars(book.stars)}
      </div>
    );
  }

  renderStars(stars) {
    return null;
    // return stars !== null ? <div className="stars">{stars}</div> : null;
  }

  render() {
    return (
      <div>
        <h2>2018</h2>
        <div
          style={{
            display: "grid",
            gridGap: "calc(1em + 2vw)",
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "0.875em",
            marginBottom: "calc(1em + 2vw)",
            lineHeight: 1.2
          }}
        >
          {books
            .filter(book => {
              return new Date(book.dateStart).getFullYear() === 2018;
            })
            .map(book => this.renderBook(book))}
        </div>
        <h2>2017</h2>
        <div
          style={{
            display: "grid",
            gridGap: "calc(1em + 2vw)",
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "0.875em",
            marginBottom: "calc(1em + 2vw)",
            lineHeight: 1.2
          }}
        >
          {books
            .filter(book => {
              return new Date(book.dateStart).getFullYear() === 2017;
            })
            .map(book => this.renderBook(book))}
        </div>
        <h2>2016</h2>
        <div
          style={{
            display: "grid",
            gridGap: "calc(1em + 2vw)",
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "0.875em",
            marginBottom: "calc(1em + 2vw)",
            lineHeight: 1.2
          }}
        >
          {books
            .filter(book => {
              return new Date(book.dateStart).getFullYear() === 2016;
            })
            .map(book => this.renderBook(book))}
        </div>
      </div>
    );
  }
}

export default BookshelfPage;
