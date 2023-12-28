import React, { Component } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import Card from "./Card/Card";
import { barChartData, barChartOptions } from "variables/charts";

// Use dynamic import for Chart component
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: [],
			chartOptions: {},
		};
	}

	componentDidMount() {
		this.setState({
			chartData: barChartData,
			chartOptions: barChartOptions,
		});
	}

	render() {
		return (
			<Card
				py="1rem"
				height={{ sm: "200px" }}
				width="100%"
				bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
				position="relative"
			>
				{/* Use conditional check for window object */}
				{typeof window !== "undefined" && (
					<Chart
						options={this.state.chartOptions}
						series={this.state.chartData}
						type="bar"
						width="100%"
						height="100%"
					/>
				)}
			</Card>
		);
	}
}

export default BarChart;
