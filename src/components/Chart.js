import React from "react";
import styles from "../styles/Chart.module.css";

const Chart = (props) => {
	let fill = 0;

	if (props.max > 0) {
		//fill the bars with the percentage of the expenses
		fill = Math.round((props.value / props.max) * 100);
	}

	return (
		<>
			<div className={styles.chartBox}>
				<div className={styles.chartBar}>
					<div
						className={styles.chartFill}
						style={{ height: `${fill}%` }}
					></div>
				</div>
				<div>{props.label}</div>
			</div>
		</>
	);
};

export default Chart;
