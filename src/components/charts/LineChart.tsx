
import { Line, LineChart as RechartsLineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LineChartProps {
  data: any[];
  title: string;
  xAxisDataKey: string;
  lines: Array<{
    dataKey: string;
    stroke: string;
    name: string;
  }>;
  className?: string;
  height?: number;
}

export function LineChart({
  data,
  title,
  xAxisDataKey,
  lines,
  className,
  height = 350,
}: LineChartProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.3} />
              <XAxis 
                dataKey={xAxisDataKey}
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <YAxis 
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
                }}
              />
              <Legend />
              {lines.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.stroke}
                  name={line.name}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
