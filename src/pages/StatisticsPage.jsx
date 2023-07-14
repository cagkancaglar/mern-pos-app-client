import Header from "../components/Header";

const StatisticsPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Statistics</h1>
      <div>
        <h1 className="text-lg">
          Welcome{" "}
          <span className="font-semibold text-green-700 text-xl">
            Administrator
          </span>
        </h1>
      </div>
    </>
  );
};

export default StatisticsPage;
