import React from 'react';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie, PolarArea } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options: ChartOptions<'line' | 'bar' | 'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Labels',
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Values',
      },
      beginAtZero: true,
    },
  },
};

const generateData = (labels: string[], data: number[]) => ({
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data,
      backgroundColor: generateColors(data.length),
      borderColor: 'rgb(75, 192, 192)',
      fill: true,
    },
  ],
});

// Function to generate a color palette based on the data length
function generateColors(length: number): string[] {
  const colors: string[] = [];
  const hueStep = 360 / length;

  for (let i = 0; i < length; i++) {
    const hue = i * hueStep;
    const saturation = 80; // Adjust saturation as needed
    const lightness = 60; // Adjust lightness as needed
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    colors.push(color);
  }

  return colors;
}

export interface ChartProps {
  labels: string[];
  data: number[];
  className?:string
}

export const LineChart: React.FC<ChartProps> = ({ labels, data }) => {
  const chartData: ChartData<'line'> = generateData(labels, data);
  return <Line options={options as ChartOptions<'line'>} data={chartData} />;
};

export const BarChart: React.FC<ChartProps> = ({ labels, data,className }) => {
  const chartData: ChartData<'bar'> = generateData(labels, data);
  return <Bar 
  className={className}


  options={options} data={chartData} />;
};

export const PieChart: React.FC<ChartProps> = ({ labels, data }) => {
  const chartData: ChartData<'pie'> = generateData(labels, data);
  return <Pie options={options} data={chartData} />;
};
export const PolarAreaChart: React.FC<ChartProps> = ({ labels, data }) => {
  const chartData: ChartData<'polarArea'> = generateData(labels, data);
  return <PolarArea options={options as ChartOptions<'polarArea'>} data={chartData} />;
};
// Example usage:
export const sampleLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const sampleData = [1100, 5500, 2300, 400, 500, 600, 700];