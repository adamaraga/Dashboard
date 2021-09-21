import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Paper } from "@material-ui/core";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <Paper className="paper chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#686868" />
          {/* <Legend /> */}
          <Line type="monotone" dataKey={dataKey} stroke="#1779e7" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
