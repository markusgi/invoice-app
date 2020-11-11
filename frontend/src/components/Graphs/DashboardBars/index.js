import React, { PureComponent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import getDates from "../../../helper/dates_helper";

const test = [
  {
    name: "Sep",
    others_ly: 4000,
    wages_ly: 2400,
    profit_ly: 2400,
    others_ty: 4000,
    wages_ty: 2400,
    profit_ty: 2400,
  },
  {
    name: "Oct",
    others_ly: 4000,
    wages_ly: 2400,
    profit_ly: 2400,
    others_ty: 4000,
    wages_ty: 2400,
    profit_ty: 2400,
  },
  {
    name: "Nov",
    others_ly: 4000,
    wages_ly: 2400,
    profit_ly: 2400,
    others_ty: 4000,
    wages_ty: 2400,
    profit_ty: 2400,
  },
];

let getGroupedData = (invoices, from, until, groupByYear) => {
  var groupedData = {};

  let filteredInvoices = invoices.filter((invoice) => {
    return invoice.date >= from && invoice.date < until;
  });
  for (let invoice of filteredInvoices) {
    let dateKey;

    let year = invoice.date.substring(0, 4);
    if (groupByYear) {
      dateKey = year;
    } else {
      dateKey = invoice.date.substring(5, 7);
    }

    if (groupedData[dateKey] == undefined) {
      groupedData[dateKey] = {};
    }

    for (let article of invoice.articles) {
      let tagName = article.tag.title + year;

      if (groupedData[dateKey][tagName] == undefined) {
        groupedData[dateKey][tagName] = article.total_price;
      } else {
        groupedData[dateKey][tagName] += article.total_price;
      }
    }
  }

  return groupedData;
};

let addRevenueTag = (groupedData, revenues) => {
  console.log(revenues);
  for (let dataKey in groupedData) {
    groupedData[dataKey]["revenue"] = 10240.2;
  }
  return groupedData;
};

// {
//  '11': {
//    food: 12312
//  }
//}

let getLegendData = (groupedData, stackId) => {
  let uniqueNames = new Set();
  for(let dataKey in groupedData) {
    for (let tagname in groupedData[dataKey]) {
      uniqueNames.add(tagname);
    }
  }

  let sortedNames = Array.from(uniqueNames).sort();

  let colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#523234'];
  let legendData = [];
  var i = 0;
  for(let element of sortedNames) {
    legendData.push({
      name: element,
      stack: stackId,
      color: colors[i%colors.length]
    });
  i++;
  }
  return legendData;
}

// static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';
// const DashboardBarsChart = ({allInfo, withRevenue}) => {
const DashboardBarsChart = ({ allInfo }) => {
  console.log('allInfo: ', allInfo);

  let currentTimeFrameStart = useSelector(
    (state) => state.filter.timeFrameStart
  ); // '12'
  let currentTimeFrameEnd = useSelector((state) => state.filter.timeFrameEnd); //

  let groupByYear = currentTimeFrameStart == "12" && currentTimeFrameEnd == "0";

  let [startDate, endDate, startDateLastYear, endDateLastYear] = getDates(
    currentTimeFrameStart,
    currentTimeFrameEnd,
    groupByYear
  );

  console.log("getDates() result ####################");
  console.log(startDate);
  console.log(endDate);
  console.log(startDateLastYear);
  console.log(endDateLastYear);

  const [data, setData] = useState(test);
  const [legend, setLegend] = useState([]);

  useEffect(() => {
    let data = test;

    let currentData = getGroupedData(
      allInfo.invoices,
      startDate,
      endDate,
      groupByYear
    );
    let lastData = getGroupedData(
      allInfo.invoices,
      startDateLastYear,
      endDateLastYear,
      groupByYear
    );
    console.log('currentData: ', currentData);
    console.log('lastData: ', lastData);

    // if (withRevenue) {
    //   currentData = addRevenueTag(currentData, allInfo.revenues)
    //   lastData = addRevenueTag(lastData, allInfo.revenues)
    // }

    // create the legend
    let legend = [];
    legend = legend.concat(getLegendData(currentData, "a"));
    legend = legend.concat(getLegendData(lastData, groupByYear ? "a" : "b"));
    setLegend(legend);

    // merge the data
    let mergedData = currentData;
    for (let dataKey in lastData) {
      if (mergedData[dataKey] == undefined) {
        mergedData[dataKey] = lastData[dataKey];
      } else {
        mergedData[dataKey] = Object.assign(
          currentData[dataKey],
          lastData[dataKey]
        );
      }
    }

    console.log("mergedData", mergedData);

    let arrayData = [];
    for (let dataKey of Object.keys(mergedData).sort()) {
      arrayData.push({ name: dataKey, ...mergedData[dataKey] });
      //{name: tagname, others_ly: 4000, wages_ly: 2400, profit_ly: 2400, others_ty: 4000, wages_ty: 2400, profit_ty: 2400}
    }

    console.log("arrayData", arrayData);

    setData(arrayData);
    console.log("arrayData: ", arrayData);
  }, [currentTimeFrameStart, currentTimeFrameEnd]);

  console.log("legend", legend);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {
        // legend.map(l => <Bar dataKey={l.name} stackId={l.stack} fill={withRevenue ? '#8884d8' : 'red'} />)
        legend.map((l) => (
          <Bar dataKey={l.name} stackId={l.stack} fill={l.color} />
        ))
      }
    </BarChart>
  );
};

export default DashboardBarsChart;
