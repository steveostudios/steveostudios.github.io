const books = [
  {
    title: "Thanks for the Feedback",
    subtitle: "The Science and Art of Receiving Feedback Well",
    author: "Douglas Stone and Sheila Heen",
    dateStart: "2019-02-28",
    dateFinish: null,
    publisher: "Penguin Books",
    stars: null,
    review: null,
    progress: 29 / 320,
    url:
      "https://www.amazon.com/Thanks-Feedback-Science-Receiving-Well/dp/0143127136/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
    image: "/static/books/ThanksForTheFeedback.jpg"
  },
  {
    title: "Animation at Work",
    subtitle: "",
    author: "Rachel Nabors",
    dateStart: "2019-02-12",
    dateFinish: "2019-02-24",
    publisher: "A Book Apart",
    stars: null,
    review: null,
    url: "https://abookapart.com/products/animation-at-work",
    image: "/static/books/AnimationAtWork.png"
  },
  {
    title: "Image Performance",
    subtitle: "",
    author: "Mat Marquis",
    dateStart: "2019-02-08",
    dateFinish: "2019-02-12",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "Great synopsis. I liked the section where Mat described how compression kindof works. It now makes way more sense how images can look perceivably identical, but have drastically different data sizes.",
    url: "https://abookapart.com/products/image-performance",
    image: "/static/books/ImagePerformance.png"
  },
  {
    title: "Clean Code",
    subtitle: "A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    dateStart: "2018-07-19",
    dateFinish: null,
    publisher: "Prentice Hall",
    stars: null,
    review: null,
    progress: 251 / 412,
    url:
      "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=as_li_ss_tl?ie=UTF8&qid=1532031940&sr=8-3&keywords=clean+code&linkCode=ll1&tag=steveostudi0c-20&linkId=3a849aca23fa18d512c11cad44ed6526",
    image: "/static/books/CleanCode.jpg"
  },
  {
    title: "Working the Command Line",
    subtitle: "",
    author: "Remy Sharp",
    dateStart: "2019-02-07",
    dateFinish: "2019-02-08",
    publisher: "A Book Apart",
    stars: 3,
    review:
      "Great overview! I was excited to read this book, to pick up some tricks, and have a small guide to give to others that want to start with the CLI.",
    url: "https://abookapart.com/products/working-the-command-line",
    image: "/static/books/WorkingTheCommandLine.png"
  },
  {
    title: "Making Sense of Color Management",
    subtitle: "",
    author: "Craig Hockenberry",
    dateStart: "2019-02-06",
    dateFinish: "2019-02-07",
    publisher: "A Book Apart",
    stars: 3,
    review:
      "Very deep and informative. The content is fantastic. But it was sort of depressing seeing how innaccurate color management is in 2019, and how it's just getting more complicated. The last chapter addresses this a bit, but it still feels dismal.",
    url: "https://abookapart.com/products/making-sense-of-color-management",
    image: "/static/books/MakingSenseOfColorManagement.png"
  },
  {
    title: "Measure What Matters",
    subtitle:
      "How Google, Bono, and the Gates Foundation Rock the World with OKRs",
    author: "Jason Grigsby",
    dateStart: "2019-01-23",
    dateFinish: "2019-02-06",
    publisher: "Portfolio",
    stars: 4,
    review:
      "OKRs are interesting. This book shows how others use these goals company-wide to meet their markets. Great overview.",
    url:
      "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221/ref=sr_1_2?crid=2R5NIMGDQPXW1&keywords=measure+what+matters&qid=1549895460&s=books&sprefix=measure+what%2Caps%2C166&sr=1-2",
    image: "/static/books/MeasureWhatMatters.jpg"
  },
  {
    title: "Progressive Web Apps",
    subtitle: "",
    author: "Jason Grigsby",
    dateStart: "2019-02-03",
    dateFinish: "2019-02-06",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "Very comprehensive, albiet almost no code! It tells you exactly what you need to know in order to create a PWA today (no telling for tomorrow!)",
    url: "https://abookapart.com/products/progressive-web-apps",
    image: "/static/books/ProgressiveWebApps.png"
  },
  {
    title: "Going Offline",
    subtitle: "",
    author: "Jeremy Keith",
    dateStart: "2018-12-26",
    dateFinish: "2018-12-31",
    publisher: "A Book Apart",
    stars: 5,
    review:
      "Perfect! Totally explains and gives the code to make a webiste offline with Service Workers. Brilliantly done!",
    url: "https://abookapart.com/products/going-offline",
    image: "/static/books/GoingOffline.png"
  },
  {
    title: "Competing Against Luck",
    subtitle: "The Story of Innovation and Customer Choice",
    author:
      "Clayton M. Christensen, Taddy Hall, Karen Dillion, and David S. Duncan",
    dateStart: "2018-12-16",
    dateFinish: "2019-02-03",
    publisher: "Harper Business",
    stars: 5,
    review:
      "This DEEPLY changed my thinking. This book outlines and chronicles the Jobs Theory. Customers don't necessarily want to buy your product, but what to 'hire for a job' in their life. Read this book if you do product development.",
    url:
      "https://www.amazon.com/Competing-Against-Luck-Innovation-Customer/dp/0062435612/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=steveostudi0c-20&linkId=14ae758bc13160f7a5be1e21de88db23&language=en_US",
    image: "/static/books/CompetingAgainstLuck.jpg"
  },
  {
    title: "The Road Back To You",
    subtitle: "An Enneagram Journey to Self-Discovery",
    author: "Ian Morgan Cron and Suzanne Stabile",
    dateStart: "2018-11-28",
    dateFinish: "2018-12-01",
    publisher: "IVP Books",
    stars: 4,
    review:
      "I'm a 9w1. Super insightful. It has truly changed the way I communicate and empathize with my wife (she read it too) and my co-workers. It was very revealing, and I learned so much about my own personality.",
    url:
      "https://www.amazon.com/Road-Back-You-Enneagram-Self-Discovery/dp/0830846190/ref=as_li_ss_tl?ie=UTF8&qid=1543860912&sr=8-3&keywords=the+road+back+to+you&linkCode=ll1&tag=steveostudi0c-20&linkId=409b18dc228d5de0a227b1215679d077&language=en_US",
    image: "/static/books/TheRoadBackToYou.jpg"
  },
  {
    title: "On Web typography",
    subtitle: "",
    author: "Jason Santa Maria",
    dateStart: "2018-08-16",
    dateFinish: "2018-12-16",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "This is the book I wanted years ago. It tells you how to pick out fonts, pair fonts, and make your information readable and legible to your users.",
    url: "https://abookapart.com/products/on-web-typography",
    image: "/static/books/OnWebTypography.png"
  },
  {
    title: "Webfont Handbook",
    subtitle: "",
    author: "Bram Stein",
    dateStart: "2018-08-04",
    dateFinish: "2018-08-16",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "I remember when having a custom font on the web meant you needed to create an image. Then using flash to embed those fonts...We've come a long way. Bram gives some really practical tips on how to use webfonts, what legal concerns you need to have, and how to get the most performance out of fonts. Great handbook to have!",
    url: "https://abookapart.com/products/webfont-handbook",
    image: "/static/books/WebfontHandbook.png"
  },

  {
    title: "Remote",
    subtitle: "",
    author: "Jason Fried and David Heinemeier Hansson",
    dateStart: "2018-05-29",
    dateFinish: "2018-07-25",
    publisher: "Crown Business",
    stars: 3,
    review:
      "Kinda all fluff and dreams. The authors spend a LOT of time just talking about all of the benefits of remote work, trying to sell you to let your team work remote. I was expecting this book to be a lot more about the practicals on _how_ to work remote! If you are looking to convince a manager to let you work remote, ",
    url:
      "https://www.amazon.com/gp/product/0804137501/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=&linkId=8a406edc2fe9394925c4e61b826ebf96",
    image: "/static/books/Remote.jpg"
  },
  {
    title: "Conversational Design",
    subtitle: "",
    author: "Erika Hall",
    dateStart: "2018-05-27",
    dateFinish: "2018-05-29",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "It is really hard to make a UI feel like a human talking to another human -- which is what every app essentially does! This book does a great job of showing the how to communicate to the user in the user's own language! Love!",
    url: "https://abookapart.com/products/conversational-design",
    image: "/static/books/ConversationalDesign.png"
  },
  {
    title: "The New CSS Layout",
    subtitle: "",
    author: "Rachael Andrew",
    dateStart: "2018-05-15",
    dateFinish: "2018-05-27",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "Gosh - remember the days when you needed to layout a website with tables? Floats? Well, no more! CSS Flexbox and Grid are here! Rachael does an amaxing job at showing what CSS flexbox and Grid are, how they fix common design problems, and even how to support backeards-compatability!",
    url: "https://abookapart.com/products/the-new-css-layout",
    image: "/static/books/TheNewCSSLayout.png"
  },
  {
    title: "JavaScript: The Good Parts",
    subtitle: "",
    author: "Douglas Crockford",
    dateStart: "2018-05-02",
    dateFinish: "2018-05-15",
    publisher: "O'Reilly | Yahoo! Press",
    stars: 5,
    review:
      "JavaScript is my language... But it is seriously quirky. I can only imagine trying to understand it coming from another programming language! This book does an excellent job advocating for JavaScript, while telling you the common pitfalls!",
    url:
      "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=as_li_ss_tl?ie=UTF8&qid=1530649753&sr=8-1&keywords=javascript+the+good+parts&linkCode=ll1&tag=steveostudi0c-20&linkId=d126a9b8a6d772ee0c6532f35c44c388",
    image: "/static/books/JavaScriptTheGoodParts.jpg"
  },
  {
    title: "Rocket Surgery Made Easy",
    subtitle: "",
    author: "Steven Krugg",
    dateStart: "2018-04-02",
    dateFinish: "2018-04-29",
    publisher: "",
    stars: 5,
    review:
      "Seriously. The most profound book on user testing. Steve gives you a script, clear examples, how to read your data... This book made me want to test!",
    url:
      "https://www.amazon.com/Rocket-Surgery-Made-Easy-Yourself/dp/0321657292/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1530649852&sr=1-1&keywords=rocket+surgery+made+easy+steve+krug&linkCode=ll1&tag=steveostudi0c-20&linkId=031fcb032fd2ff1c178fd7ddb322a43c",
    image: "/static/books/RocketSurgeryMadeEasy.jpg"
  },
  {
    title: "Practical Design Discovery",
    subtitle: "",
    author: "Dan Brown",
    dateStart: "2018-03-02",
    dateFinish: "2018-03-29",
    publisher: "A Book Apart",
    stars: null,
    review: null,
    url: "https://abookapart.com/products/practical-design-discovery",
    image: "/static/books/PracticalDesignDiscovery.png"
  },
  {
    title: "High Performance JavaScript",
    subtitle: "",
    author: "Nicholas C. Zakas",
    dateStart: "2018-01-01",
    dateFinish: "2018-03-02",
    publisher: "O'Reilly | Yahoo! Press",
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
    dateStart: "2017-07-04",
    dateFinish: "2017-07-04",
    publisher: "A Book Apart",
    stars: 2,
    review:
      "Super basic. If you need an introduction to HTML, this is the book for you!",
    url: "https://abookapart.com/products/1e-html5-for-web-designers",
    image: "/static/books/HTML5ForWebDesigners.png"
  },
  {
    title: "CSS3 for Web Designers",
    subtitle: "",
    author: "Dan Cederholm",
    dateStart: "2017-07-04",
    dateFinish: "2017-07-04",
    publisher: "A Book Apart",
    stars: 5,
    review: null,
    url: "https://abookapart.com/products/css3-for-web-designers",
    image: "/static/books/CSS3ForWebDesigners.png"
  },
  {
    title: "Responsive Web Design",
    subtitle: "",
    author: "Ethan Marcotte",
    dateStart: "2017-07-04",
    dateFinish: "2017-07-04",
    publisher: "A Book Apart",
    stars: null,
    review: "",
    url: "https://abookapart.com/products/responsive-web-design",
    image: "/static/books/ResponsiveWebDesign.png"
  },
  {
    title: "The Third Wave",
    subtitle: "An Entrepreneur's Vision of the Future",
    author: "Steve Case",
    dateStart: "2017-03-02",
    dateFinish: "2017-03-02",
    publisher: "Simon & Schuster",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/gp/product/150113258X/ref=as_li_ss_tl?ie=UTF8&psc=1&linkCode=ll1&tag=steveostudi0c-20&linkId=67ea54caaf69f89104e5e71d6077da94",
    image: "/static/books/TheThirdWave.jpg"
  },
  {
    title: "Just Enough Research",
    subtitle: "",
    author: "Erika Hall",
    dateStart: "2016-11-30",
    dateFinish: "2016-11-30",
    publisher: "A Book Apart",
    stars: null,
    review: "",
    url: "https://abookapart.com/products/just-enough-research",
    image: "/static/books/JustEnoughResearch.png"
  },
  {
    title: "Designing for Emotion",
    subtitle: "",
    author: "Aarron Walter",
    dateStart: "2017-01-30",
    dateFinish: "2017-01-30",
    publisher: "A Book Apart",
    stars: null,
    review: "",
    url: "https://abookapart.com/products/designing-for-emotion",
    image: "/static/books/DesigningForEmotion.png"
  },
  {
    title: "Design for Real Life",
    subtitle: "",
    author: "Eric Meyer and Sara Wachter-Boettcher",
    dateStart: "2017-01-30",
    dateFinish: "2017-01-30",
    publisher: "A Book Apart",
    stars: null,
    review: "",
    url: "https://abookapart.com/products/design-for-real-life",
    image: "/static/books/DesignForRealLife.png"
  },
  {
    title: "JavaScript for Web Designers",
    subtitle: "",
    author: "Mat Marquis",
    dateStart: "2016-11-30",
    dateFinish: "2016-11-30",
    publisher: "A Book Apart",
    stars: 3,
    review:
      "Great book, but outdated. My favorite parts were the introduction where it describes how the JavaScript sausage is made. People throw around 'TC39' and `EcmaScript` all of the time, but now I understand!",
    url: "https://abookapart.com/products/javascript-for-web-designers",
    image: "/static/books/JavaScriptForWebDesigners.png"
  },
  {
    title: "Git for Humans",
    subtitle: "",
    author: "David Demaree",
    dateStart: "2016-09-26",
    dateFinish: "2016-09-26",
    publisher: "A Book Apart",
    stars: 5,
    review:
      "This book seriously made Git make sense. I had read dozens of articles, watch hours of videos, and screwwed up several projects until I found this. No other humans has explained Git as David has! Must read!",
    url: "https://abookapart.com/products/git-for-humans",
    image: "/static/books/GitForHumans.png"
  },
  {
    title: "Practical SVG",
    subtitle: "",
    author: "Chris Coyier",
    dateStart: "2016-09-26",
    dateFinish: "2016-09-26",
    publisher: "A Book Apart",
    stars: 4,
    review:
      "This is an excellent introduction to SVG and some of the crazy, awesomeness that SVG is. I am a avid listener of Shop Talk Show, CodePen Radio, a user of CodePen and CSS Tricks. I'm team Chris Coyier! Honestly I would have given this 5 stars if I hadn't already learned most of this by myself. Great book!",
    url: "https://abookapart.com/products/practical-svg",
    image: "/static/books/PracticalSVG.png"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Async & Performance",
    author: "Kyle Simpson",
    dateStart: "2016-02-19",
    dateFinish: "2016-02-19",
    publisher: "O'Reilly",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Performance-ebook/dp/B00TXVCJ7O/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-6&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=704aab462580c75d1dcb02f8429155c0",
    image: "/static/books/YouDontKnowJSAsyncAndPerformance.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Types & Grammar",
    author: "Kyle Simpson",
    dateStart: "2016-02-18",
    dateFinish: "2016-02-18",
    publisher: "O'Reilly",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Grammar/dp/1491904194/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-4&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=c2ff425aad937a761a3ffc888bfd69bb",
    image: "/static/books/YouDontKnowJSTypesAndGrammar.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "ES6 & Beyond",
    author: "Kyle Simpson",
    dateStart: "2016-02-20",
    dateFinish: "2016-02-20",
    publisher: "O'Reilly",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Beyond/dp/1491904240/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-5&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=456e4c3109e981dcb9fa0756da4ca3be",
    image: "/static/books/YouDontKnowJSES6AndBeyond.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Scope & Closures",
    author: "Kyle Simpson",
    dateStart: "2016-02-16",
    dateFinish: "2016-02-16",
    publisher: "O'Reilly",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Closures/dp/1449335586/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-2&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=a99c946afd2dc42e794eaa616ace0dec",
    image: "/static/books/YouDontKnowJSScopeAndClosures.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "this & Object Prototypes",
    author: "Kyle Simpson",
    dateStart: "2016-02-17",
    dateFinish: "2016-02-17",
    publisher: "O'Reilly",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Prototypes/dp/1491904151/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-3&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=146c129765a14c99d6b84d770b51f970",
    image: "/static/books/YouDontKnowJSThisAndObjectPrototypes.jpg"
  },
  {
    title: "You Don't Know JS",
    subtitle: "Up & Going",
    author: "Kyle Simpson",
    dateStart: "2016-02-15",
    dateFinish: "2016-02-15",
    publisher: "O'Reilly",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/You-Dont-Know-JS-Going/dp/1491924462/ref=as_li_ss_tl?ie=UTF8&qid=1530674071&sr=8-1&keywords=you+don't+know+js&linkCode=ll1&tag=steveostudi0c-20&linkId=640e8b51b5da0f9863662f31be4eb666",
    image: "/static/books/YouDontKnowJSUpAndGoing.jpg"
  },
  {
    title: "Sprint",
    subtitle: "How to Solve Big Problems and Test New Ideas in Just Five Days",
    author: "Jake Knapp, John Zeratsky, and Brandon Kowitz",
    dateStart: "2016-01-15",
    dateFinish: "2016-01-15",
    publisher: "Simon & Schuster",
    stars: null,
    review: "",
    url:
      "https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X/ref=as_li_ss_tl?ie=UTF8&qid=1531075696&sr=8-2&keywords=sprint&linkCode=ll1&tag=steveostudi0c-20&linkId=6d131932f77600def106419e0a205f69",
    image: "/static/books/Sprint.jpg"
  }
];

export default books;
