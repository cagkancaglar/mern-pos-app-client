const StatisticCard = ({ title, amount, img }) => {
  return (
    <div className="card-item bg-gray-800 rounded-lg p-8">
      <div className="flex items-center gap-x-4">
        <div className="p-3">
          <img src={img} alt="" className="w-24 object-cover rounded-full" />
        </div>
        <div className="text-white">
          <p className="text-lg font-medium capitalize text-gray-400 mb-2">{title}</p>
          <p className="text-xl font-semibold text-gray-200">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
