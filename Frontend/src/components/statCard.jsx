import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  change,
  trend, // "positive", "negative", ou null
  icon,
  iconBg = "bg-gray-100",
  iconColor = "text-gray-800",
}) {
  const isPositive = trend === "positive";
  const isNegative = trend === "negative";
  const trendColor = isPositive
    ? "text-green-500"
    : isNegative
    ? "text-red-500"
    : "text-gray-500";

  const TrendIcon = isPositive
    ? ArrowUpRight
    : isNegative
    ? ArrowDownRight
    : null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          <div className={`flex items-center text-sm mt-2 ${trendColor}`}>
            {TrendIcon && <TrendIcon size={16} className="mr-1" />}
            <span>{change}</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${iconBg}`}>
          <div className={iconColor}>{icon}</div>
        </div>
      </div>
    </div>
  );
}
