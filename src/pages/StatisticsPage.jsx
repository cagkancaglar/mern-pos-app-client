import Header from "../components/Header";
import StatisticCard from "../components/StatisticCard";

const StatisticsPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4 ">Statistics</h1>
        <div className="statistics-section">
          <h1 className="text-lg">
            Welcome{" "}
            <span className="font-semibold text-green-700 text-xl">
              Administrator
            </span>
          </h1>
          <div className="statistic-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-4 md:gap-10">
            <StatisticCard
              title={"total customer"}
              amount={"5"}
              img={"https://picsum.photos/2000"}
            />
            <StatisticCard
              title={"total earnings"}
              amount={"1075.6 $"}
              img={"https://picsum.photos/2000"}
            />
            <StatisticCard
              title={"total order"}
              amount={"38"}
              img={"https://picsum.photos/2000"}
            />
            <StatisticCard
              title={"total products"}
              amount={"63"}
              img={"https://picsum.photos/2000"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
