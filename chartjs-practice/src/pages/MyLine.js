import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyLine = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "04.03",
    "04.04",
    "04.05",
    "04.06",
    "04.07",
    "04.08",
    "04.09",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [3.14, 12.53, 11.2, 15.7, 14.6, 7.8, 9.9],
        // legend에 있는 border 색깔과 그래프의 line 색깔을 결정한다.
        borderColor: "rgb(255, 99, 132)",
        // legend에 있는 background 색깔
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [6.5, 7.8, 4.4, 12.3, 8.8, 5.5, 6.9],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="MyLine" style={{ width: "50%" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default MyLine;
