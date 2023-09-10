import Header from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";
import { Area, Pie } from "@ant-design/plots";
import { useState, useEffect } from "react";

const StatisticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  const dataPie = [
    {
      type: "分类一",
      value: 27,
    },
    {
      type: "分类二",
      value: 25,
    },
    {
      type: "分类三",
      value: 18,
    },
    {
      type: "分类四",
      value: 15,
    },
    {
      type: "分类五",
      value: 10,
    },
    {
      type: "其他",
      value: 5,
    },
  ];

  const configPie = {
    appendPadding: 10,
    data: dataPie,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };

  return (
    <div>
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
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-20 md:pb-0">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} className="" />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...configPie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
