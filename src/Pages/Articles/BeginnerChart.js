import ArticleTemplate from '../../Components/Articles/ArticleTemplate';
// Progress bar
import getProgress from '../../Components/ProgressBar/getProgress';
import BeginnerChartHero from '../../Assets/articles/beginner-chart.png';

const BeginnerChart = () => {
  let content = {
    heroImage: BeginnerChartHero,
    title: 'Reading a chart for beginners',
    body: [
      {
        subtitle: 'What is a Chart?',
        paraContent: [
          `A chart is a tool used to track the price of an asset over a stated period of time to provide the reader with information regarding the asset's price changes, current price, volume and all-time highs. Investors use charts to perform technical analysis for future price predictions, in addition to day or swing trading. In order to read a chart, there are a few key components to understand.`,
        ],
      },
      {
        subtitle: 'Time and Price Axes',
        paraContent: [
          'On a chart, the time period will be displayed using the x-axis (horizontal) while the price will be displayed using the y-axis (vertical). The chart will flow from left (older in time) to right (newer in time) in order to show increases (rising line) or decreases (falling line) in price.',
        ],
      },
      {
        subtitle: 'High and Low',
        paraContent: [
          'A price is displayed at the highest point and lowest point on the chart. The high point represents the highest price of the asset during that time period, and the low point the lowest price.',
        ],
      },
      {
        subtitle: 'Volume',
        paraContent: [
          `Trading volume generally appears as bars on the bottom (x-axis) of the chart. These bars indicate the volume of the asset traded during the time frame shown. A higher bar indicates more volume, while a lower bar indicates less volume during that time frame.`,
        ],
      },
      {
        subtitle: 'Types of Charts',
        paraContent: [
          ``,
        ],
      },
      {
        subtitle: 'Line Charts',
        paraContent: [
          `Line charts track the price movement of an asset by drawing a line through each price movement of the asset over the stated time period. Line charts are helpful when analyzing data over a longer time frame such as months or years. `,
        ],
      },
      {
        subtitle: 'Candlestick Charts',
        paraContent: [
          `A candlestick chart is much more complex than a line chart. It is generally used for technical analysis, or for day trading and is best utilized for time periods such as 5 min, 30 min or 1 hour, rather than days or weeks. A candlestick chart creates a 'candle' for each time period requested. A candle appears green when it closes at a higher price than the prior candle, and red when it closes at a lower price. The lowest point of a candle indicates the lowest price of the asset during the time frame, and the highest point indicates the highest price. These points are called the 'wicks' of the candle. The middle of the candle, which appears thicker than the wicks, indicates the difference between the open price and close price of that time period.`,
        ],
      },
      {
        subtitle: 'How to Read a Chart',
        paraContent: [
          `In order to read a chart, you first need to determine the time period you want to analyze. A chart can be as short as a day, or it can show the trade data for the entire life of an asset, depending on what you choose. Once you have chosen the time frame, you read a chart from left to right.`,

          `The left side of your chart will indicate the price at the beginning of your requested time period and the right side will indicate the most recent price of the asset. If the line (or candle) is rising from left to right, the price of that asset has risen over the time frame you are analyzing. If the line has fallen, the price of that asset has decreased over that time period.`,

          `Once you have a general understanding of the price movements over the time period displayed, you can analyze volume in conjunction with price fluctuations. A jump in volume can explain a sudden price increase, likewise, a period of low volume may explain why an asset's price decreased.`,

          `In order to further utilize a chart, check out the article on 'Basic Chart Patterns' to learn about general price analysis techniques.`
        ],
      },
    ],
  };

  return (
    <div>
      <div className="mainContainer">
        <ArticleTemplate
          heroImage={content.heroImage}
          title={content.title}
          body={content.body}
        />
      </div>
    </div>
  );
};

export default getProgress(BeginnerChart);
