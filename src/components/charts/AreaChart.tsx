
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AreaChartProps {
  data: any[];
  title: string;
  xAxisDataKey: string;
  areas: Array<{
    dataKey: string;
    fill: string;
    stroke: string;
    name: string;
  }>;
  className?: string;
  height?: number;
}

export function AreaChart({
  data,
  title,
  xAxisDataKey,
  areas,
  className,
  height = 350,
}: AreaChartProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: height }}>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsAreaChart
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
              {areas.map((area, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={area.dataKey}
                  fill={area.fill}
                  stroke={area.stroke}
                  name={area.name}
                />
              ))}
            </RechartsAreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
