import React, { Component } from "react";
import Loading from "./Loading";
import Newscard from "./Newscard";

export default class News extends Component {
  articles = [
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
  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
    };
    document.title = `Newsify - ${this.capitalFirstLetter(
      this.props.category
    )}`;
  }
  capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=21`;

    this.setState({
      loading: true,
    });

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
      }&apiKey=${this.props.apiKey}&pageSize=21&page=${this.state.page + 1}`;

      this.setState({
        loading: true,
      });

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
      }&apiKey=${this.props.apiKey}&pageSize=21&page=${this.state.page - 1}`;

      this.setState({
        loading: true,
      });

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
                  author={e.author}
                  date={e.publishedAt}
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
