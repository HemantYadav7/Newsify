import React, { Component } from "react";
import Loading from "./Loading";
import Newscard from "./Newscard";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "David Keyton",
      title:
        "Charles III arrives in Edinburgh for queen coffin procession - The Associated Press",
      description:
        "EDINBURGH, Scotland (AP) — King Charles arrived in Edinburgh on Monday to accompany his late mother’s coffin on an emotion-charged procession through the historic heart of the Scottish capital to a cathedral where it will lie for 24 hours to allow the public …",
      url: "https://apnews.com/article/queen-elizabeth-ii-king-charles-iii-london-scotland-d5c23676ea3f1a546ae20f5d9f5f553a",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/5dd652790c9946bb8a289c1d720cfec3/3000.jpeg",
      publishedAt: "2022-09-12T11:51:29Z",
      content:
        "EDINBURGH, Scotland (AP) King Charles arrived in Edinburgh on Monday to accompany his late mothers coffin on an emotion-charged procession through the historic heart of the Scottish capital to a cath… [+4716 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Ryan Gaydos",
      title:
        "Cowboys backup quarterbacks: Who fills in for Dak Prescott while star is sidelined? - Fox News",
      description:
        "Dak Prescott's injury leaves the Dallas Cowboys with a glaring hole at the quarterback position. Who is going to fill that void for the next few weeks?",
      url: "https://www.foxnews.com/sports/cowboys-backup-quarterbacks-who-fills-dak-prescott-star-sidelined",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Dak-Prescott4.jpg",
      publishedAt: "2022-09-12T11:20:12Z",
      content:
        "The Dallas Cowboys are now without Dak Prescott for several weeks, leaving a glaring hole at the quarterback position for the second time in two seasons.\r\nPrescott missed most of the 2020 season with… [+3016 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Mike Calia",
      title: "5 things to know before the stock market opens Monday - CNBC",
      description:
        "Here are the most important news items that investors need to start their trading day.",
      url: "https://www.cnbc.com/2022/09/12/5-things-to-know-before-the-stock-market-opens-monday-september-12.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107116182-16627388762022-09-09t154713z_1153078137_rc2qdw9mb45s_rtrmadp_0_usa-stocks.jpeg?v=1662981163&w=1920&h=1080",
      publishedAt: "2022-09-12T11:12:43Z",
      content:
        "Traders work on the floor of the New York Stock Exchange (NYSE) in New York City, U.S., September 9, 2022.\r\nHere are the most important news items that investors need to start their trading day:\r\n1. … [+4383 chars]",
    },
    {
      source: {
        id: null,
        name: "Wccftech",
      },
      author: "Hassan Mujtaba",
      title:
        "Intel’s 35W Core i7-13700T Raptor Lake CPU Is Faster Than The 105W Ryzen 7 5800X & 125W Core i5-12600K In Leaked Benchmark - Wccftech",
      description:
        "New benchmarks of the Intel Core i7-13700T, a 35W Raptor Lake CPU, have leaked out which show impressive performance figures.",
      url: "https://wccftech.com/intel-core-i7-13700t-35w-raptor-lake-cpu-beats-5800x-105w-12600k-125w-benchmark-leak/",
      urlToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2022/08/Intel-Raptor-Lake-scaled.jpg",
      publishedAt: "2022-09-12T11:01:42Z",
      content:
        "New benchmarks of the Intel Core i7-13700T, a 35W Raptor Lake CPU, have leaked out which show impressive performance figures.\r\nIntel's Core i7-13700T, 35W Raptor Lake CPU, Beats The 105W 5800X &amp; … [+5931 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Ukraine and Russia: What you need to know right now - Reuters",
      description:
        'Ukrainian forces swept further across territory seized from fleeing Russian troops on Monday, as Moscow grappled with the consequences of the collapse of its occupation force in northeastern Ukraine. <a href="/world/europe/ukraine-accuses-russia-attacking-pow…',
      url: "https://www.reuters.com/world/europe/ukraine-russia-what-you-need-know-right-now-2022-09-12/",
      urlToImage:
        "https://www.reuters.com/resizer/0yqDSzEzC3hxB3Gf-tTSk0RMoeU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T3FRSCRWXFLVLHCE6QQRIKMNYI.jpg",
      publishedAt: "2022-09-12T10:33:00Z",
      content:
        "Sept 12 (Reuters) - Ukrainian forces swept further across territory seized from fleeing Russian troops on Monday, as Moscow grappled with the consequences of the collapse of its occupation force in n… [+3397 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Arjun Kharpal",
      title:
        "Twitter calls Elon Musk's third attempt to scrap acquisition invalid ahead of key shareholder vote - CNBC",
      description:
        "Twitter shareholders will vote on Tuesday on whether to approve or reject Elon Musk's takeover bid.",
      url: "https://www.cnbc.com/2022/09/12/twitter-calls-elon-musks-third-attempt-to-scrap-acquisition-invalid-ahead-of-key-shareholder-vote.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107050929-1650888287874-gettyimages-1239995671-porzycki-elonmusk220414_np0qi.jpeg?v=1662979220&w=1920&h=1080",
      publishedAt: "2022-09-12T10:32:17Z",
      content:
        "Twitter said Monday that payments to a whistleblower did not breach any of its obligations under the $44 billion acquisition proposed by Elon Musk, after the billionaire sent a third letter to try to… [+2662 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Michael Wayland",
      title:
        "Ford expands hands-free driving system to $40,000 Lincoln Corsair crossover - CNBC",
      description:
        "The 2023 Corsair, starting at about $40,000, will be the lowest-priced vehicle in the company to offer the technology.",
      url: "https://www.cnbc.com/2022/09/12/fords-hands-free-driving-tech-in-lincoln-corsair-starting-at-40000.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107116357-1662749073320-New_2023_Lincoln_Corsair_Grand_Touring_11.jpg?v=1662976801&w=1920&h=1080",
      publishedAt: "2022-09-12T10:00:01Z",
      content:
        "2023 Lincoln Corsair Grand Touring plug-in hybrid electric vehicle\r\nDETROIT Ford Motor is expanding the availability of its hands-free highway driving system to Lincoln's entry-level Corsair crossove… [+2950 chars]",
    },
    {
      source: {
        id: null,
        name: "TribLIVE",
      },
      author: "Tim Benz",
      title:
        "First Call: Patriots QB gets X-rays in advance of Steelers game; JuJu vs. James Conner; ex-Steeler linebacker scores - TribLIVE",
      description:
        "Monday&rsquo;s &ldquo;First Call&rdquo; updates the health of Mac Jones as he and the Patriots prepare to face the Pittsburgh Steelers in Week 2 of the NFL season. A pair of former Steelers lock horns in Arizona. Another scores against the Patriots in Miami. …",
      url: "https://triblive.com/sports/first-call-patriots-qb-gets-x-rays-in-advance-of-steelers-game-juju-vs-james-conner-ex-steeler-linebacker-scores/",
      urlToImage:
        "https://assets-varnish.triblive.com/2022/09/5420705_web1_ptr-MacJonesFumble-091322.jpg",
      publishedAt: "2022-09-12T09:52:48Z",
      content:
        "Monday’s “First Call” updates the health of Mac Jones as he and the Patriots prepare to face the Pittsburgh Steelers in Week 2 of the NFL season.\r\nA pair of former Steelers lock horns in Arizona. Ano… [+3751 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jake Tapper, Anchor and Chief Washington Correspondent",
      title:
        "Biden will not travel with a delegation to Queen Elizabeth's funeral - CNN",
      description:
        "Buckingham Palace did not invite President Joe Biden to assemble a delegation to attend the funeral of Queen Elizabeth II next week, and instead extended a specific invitation for only the President and first lady, a White House official told CNN.",
      url: "https://www.cnn.com/2022/09/11/politics/joe-biden-queen-elizabeth-funeral/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220911182403-joe-biden-queen-elizabeth-funeral-super-tease.jpg",
      publishedAt: "2022-09-12T09:48:00Z",
      content:
        "(CNN)Buckingham Palace did not invite President Joe Biden to assemble a delegation to attend the funeral of Queen Elizabeth II next week, and instead extended a specific invitation for only the Presi… [+899 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jeremy Herb, CNN",
      title:
        "Exclusive: 'I'm just not going to leave': New book reveals Trump vowed to stay in White House - CNN",
      description:
        "Former President Donald Trump repeatedly told aides in the days following his 2020 election loss that he would remain in the White House rather than let incoming President Joe Biden take over, according to reporting provided to CNN from a forthcoming book by …",
      url: "https://www.cnn.com/2022/09/12/politics/trump-vowed-to-stay-in-white-house-haberman-book/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220911163322-trump-2020-election-loss-behavior-super-tease.jpg",
      publishedAt: "2022-09-12T09:33:00Z",
      content:
        "(CNN)Former President Donald Trump repeatedly told aides in the days following his 2020 election loss that he would remain in the White House rather than let incoming President Joe Biden take over, a… [+3758 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "https://www.engadget.com/about/editors/steve-dent",
      title:
        "Leak appears to show Meta's Quest Pro headset a month ahead of launch - Engadget",
      description:
        "Meta's Quest Pro headset is due to arrive next month, but a leaked video appears to show it in full.",
      url: "https://www.engadget.com/leak-appears-to-show-metas-quest-pro-headset-a-month-ahead-of-launch-084747907.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-08/85b7f700-3272-11ed-bd7d-0b839f4d487e",
      publishedAt: "2022-09-12T08:49:58Z",
      content:
        "Meta's Quest Pro headset is due to arrive next month, but a leaked video appears to show it in full. It was originally posted on Facebook by Ramiro Cardenas, who said that multiple devices (labeled \"… [+1198 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "McCarthy mows down GOP detractors ahead of speaker bid — but the job isn't done - POLITICO",
      description:
        "The minority leader and his partners have indeed worked — with great success — to shape the contours of a potential Republican House majority in 2023 with McCarthy at the helm.",
      url: "https://www.politico.com/news/2022/09/12/kevin-mccarthy-house-speaker-bid-00056090",
      urlToImage:
        "https://static.politico.com/74/04/d4d22f734934b6a4649623dbfe09/220911-kevin-mccarthy-ap.jpg",
      publishedAt: "2022-09-12T08:30:00Z",
      content:
        "This is coming from McCarthy, charged Bob Burns, who is challenging Hansel in the Republican primary to take on Democratic Rep. Annie Kuster. (Donors to the group spending against Burns wont be discl… [+10798 chars]",
    },
    {
      source: {
        id: null,
        name: "SamMobile",
      },
      author: "SamMobile",
      title:
        "More details about Galaxy S23 Ultra's 200MP camera leak - SamMobile - Samsung news",
      description:
        "It has been reported multiple times that Samsung will upgrade to a 200MP camera sensor for the Galaxy S23 Ultra. ...",
      url: "https://www.sammobile.com/news/galaxy-s23-ultra-200mp-camera-specifications-leak/",
      urlToImage:
        "https://www.sammobile.com/wp-content/uploads/2022/02/Galaxy-S22-Ultra-2-720x405.jpg",
      publishedAt: "2022-09-12T08:07:00Z",
      content:
        "It has been reported multiple times that Samsung will upgrade to a 200MP camera sensor for the Galaxy S23 Ultra. However, the camera sensors features werent revealed. Now, reliable tipster Ice Univer… [+1217 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "YNW Melly Denied Emergency Jail Pass for Abscessed Tooth Under Grill - TMZ",
      description:
        "YNW Melly's diamond-encrusted grill isn't doing him any favors in jail -- and neither is the judge who denied his recent request to leave jail for emergency dental work.",
      url: "https://www.tmz.com/2022/09/12/ynw-melly-denied-judge-prison-diamond-teeth-floss/",
      urlToImage:
        "https://imagez.tmz.com/image/42/16by9/2022/09/07/42d176c885b04260b16d51698e5ff31f_xl.jpg",
      publishedAt: "2022-09-12T08:00:00Z",
      content:
        "YNW Melly's diamond-encrusted grill isn't doing him any favors in jail -- and neither is the judge who denied his recent request to leave jail for emergency dental work.\r\nThe \"Murder on my Mind\" rapp… [+948 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nouran Salahieh and Tina Burnside, CNN",
      title:
        "Mudslide traps drivers in Southern California as storms bring heavy rainfall over the region - CNN",
      description:
        "A mudslide trapped multiple drivers in Southern California as storms drenched the region and brought flash flood warnings Sunday evening.",
      url: "https://www.cnn.com/2022/09/12/us/california-lake-hughes-mudslide/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220912013644-mudslide-in-lake-hughes-california-map-super-tease.jpg",
      publishedAt: "2022-09-12T07:51:00Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Story by Reuters",
      title:
        "Swedish right opposition inches ahead in election cliff-hanger - CNN",
      description:
        "Sweden's right bloc inched into the narrowest of leads with around 90% of votes counted after Sunday's general election, with results pointing to a new government after eight years of Social Democrat rule.",
      url: "https://www.cnn.com/2022/09/11/europe/sweden-election-exit-poll-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220911203624-sweden-pm-magdalena-andersson-vote-9-11-2022.jpg?q=w_800,c_fill",
      publishedAt: "2022-09-12T07:22:00Z",
      content:
        "Swedens right bloc inched into the narrowest of leads with around 90% of votes counted after Sundays general election, with results pointing to a new government after eight years of Social Democrat r… [+1723 chars]",
    },
    {
      source: {
        id: null,
        name: "Tom's Guide",
      },
      author: "Philip Michaels",
      title:
        "iOS 16 launch day is here — try these features first - Tom's Guide",
      description:
        "You'll be able to download iOS 16 onto your iPhone on September 12",
      url: "https://www.tomsguide.com/news/ios-16-launch-day-is-here-try-these-features-first",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/3hMwjBwFMBCAthZ3NFJ7Xo-1200-80.jpg",
      publishedAt: "2022-09-12T06:30:59Z",
      content:
        "iOS 16, the next version of Apple's iPhone software, becomes available for download today (September 12). And if you've been following along since Apple first previewed the update at its developer co… [+8496 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Maya Yang",
      title:
        "‘A wakeup call’: more Republicans are softening staunch anti-abortion stance - The Guardian US",
      description:
        "Moves comes amid a ferocious backlash to the fall of Roe that has seen Democrat hopes in the midterm elections revived",
      url: "https://amp.theguardian.com/us-news/2022/sep/12/republicans-soften-staunch-anti-abortion-stance",
      urlToImage:
        "https://i.guim.co.uk/img/media/46afdec3fa86df3fe963ce178ef6dfaff9388b62/914_2_4761_2857/master/4761.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=35ba78cb26b0ac357de6551176285e48",
      publishedAt: "2022-09-12T06:01:00Z",
      content:
        "A growing number of Republicans are changing their positions on abortions since the fall of Roe v Wade as midterm elections approach in the US, signaling a softened shift from their previously staunc… [+8706 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Zeke Miller",
      title:
        "In a nod to JFK, Biden pushing 'moonshot' to fight cancer - The Associated Press",
      description:
        "WASHINGTON (AP) — President Joe Biden is set to channel John F. Kennedy on the 60th anniversary of JFK's moonshot speech, highlighting Biden administration efforts aimed at \"ending cancer  as we know it.”",
      url: "https://apnews.com/article/biden-health-diagnostic-tests-john-f-kennedy-presidential-library-and-museum-government-politics-6bc8183548cd46545f4141cfa6fe4630",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/2cae464906194d0e98d06b1f71573c0e/2596.jpeg",
      publishedAt: "2022-09-12T04:18:16Z",
      content:
        "WASHINGTON (AP) President Joe Biden is set to channel John F. Kennedy on the 60th anniversary of JFKs moonshot speech, highlighting Biden administration efforts aimed at ending cancer as we know it.\r… [+7430 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Hugh Son",
      title:
        "JPMorgan Chase acquires payments fintech Renovite to help it battle Stripe and Block - CNBC",
      description:
        "While JPMorgan is the world's biggest provider of merchant services, fast-growing upstarts including Stripe and Block have been climbing the rankings.",
      url: "https://www.cnbc.com/2022/09/12/jpmorgan-jpm-fintech-deal-to-acquire-renovite-to-battle-stripe-and-block.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/104640101-Dimon-Intv-102.jpg?v=1662955261&w=1920&h=1080",
      publishedAt: "2022-09-12T04:01:01Z",
      content:
        "The main entrance at JPMorgan's headquarters in New York City.\r\nJPMorgan Chase has agreed to acquire a payments startup called Renovite to fend off threats from fintech firms including Stripe and Blo… [+3425 chars]",
    },
  ];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=30f6eead50a348d7a6b4e342a80867fe&pageSize=21`;
    {
      this.setState({
        loading: true,
      });
    }
    const data = await fetch(url);
    const parsedata = await data.json();

    this.setState({
      articles: parsedata.articles,
      loading: false,
    });
  }

  render() {
    const nextPage = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=30f6eead50a348d7a6b4e342a80867fe&pageSize=21&page=${
        this.state.page + 1
      }`;
      {
        this.setState({
          loading: true,
        });
      }
      const data = await fetch(url);
      const parsedata = await data.json();

      this.setState({
        articles: parsedata.articles,
        page: this.state.page + 1,
        loading: false,
      });
    };
    const prevPage = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=30f6eead50a348d7a6b4e342a80867fe&pageSize=21&page=${
        this.state.page - 1
      }`;
      {
        this.setState({
          loading: true,
        });
      }
      const data = await fetch(url);
      const parsedata = await data.json();

      this.setState({
        articles: parsedata.articles,
        page: this.state.page - 1,
        loading: false,
      });
    };
    return (
      <>
        <h1 style={{ margin: "2% 10%" }}>Newsify - {this.props.newsTitle}</h1>
        {this.state.loading && <Loading />}
        <div className="newsCardContainer">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <Newscard
                  key={e.url}
                  title={e.title}
                  descrption={e.description}
                  imgUrl={e.urlToImage}
                  url={e.url}
                />
              );
            })}
        </div>
        <div className="nextPrevtbns">
          <button
            disabled={this.state.page <= 1}
            onClick={prevPage}
            className="nextBtn btn"
          >
            &laquo; Prev
          </button>
          <button
            disabled={this.state.page >= 4}
            onClick={nextPage}
            className="prevBtn btn"
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}
