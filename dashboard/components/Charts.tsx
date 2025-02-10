'use client'

import { ChartOptions, Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js"
import { Bar, Doughnut, Line } from "react-chartjs-2"

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement)

const colors = {
    primary: "#0891b2",
    primaryLight: "#06b6d4",
    primaryLighter: "#22d3ee",
    primaryDark: "#0e7490",
    primaryDarker: "#155e75",
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const randomData = () => Array.from({ length: months.length }, () => Math.floor(Math.random() * 200))

const BarChart = () => {
    const data = {
        labels: months,
        datasets: [
            {
                data: randomData(),
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            }
        ]
    }

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                grid: { display: false },
                ticks: {
                    stepSize: 50,
                    font: { size: 12, family: "Open Sans, sans-serif" },
                    color: "#97a4af",
                    padding: 10,
                },
            },
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 12, family: "Open Sans, sans-serif" },
                    color: "#97a4af",
                    padding: 5,
                },
            }
        }
    }

    return <Bar data={data} options={options} />
}


const DoughnutChart = () => {
    const data = {
        labels: months,
        datasets: [
            {
                data: randomData(),
                backgroundColor: [
                    colors.primary,
                    colors.primaryLighter,
                    colors.primaryLight,
                ],
                hoverBackgroundColor: colors.primaryDark,
                borderWidth: 0,
            }
        ]
    }

    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "bottom" },
        },
        animation: {
            duration: 1000,
            easing: "easeInOutQuart" as const,
        }
    }

    return <Doughnut
        data={data}
        options={options} />
}

const ActiveUsersChart = () => {
    const data = {
        labels: [...randomData(), ...randomData()],
        datasets: [
            {
                data: [...randomData(), ...randomData()],
                backgroundColor: colors.primary,
                borderWidth: 0,
                categoryPercentage: 1,
            }
        ]
    }

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { display: false },
        },
        hover: { mode: "nearest", intersect: true }
    }

    return <Bar data={data} options={options} />
}

const LineChart = () => {
    const data = {
        labels: months,
        datasets: [
            {
                data: randomData(),
                fill: false,
                borderColor: colors.primary,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0,
            }
        ]
    }

    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                ticks: {
                    stepSize: 50,
                    font: { size: 12, family: "Open Sans, sans-serif" },
                    color: "#97a4af",
                    padding: 20
                }
            },
            x: { grid: { display: false } }
        }
    }

    return <Line data={data} options={options} />
}

export {
    BarChart,
    DoughnutChart,
    ActiveUsersChart,
    LineChart,
}
