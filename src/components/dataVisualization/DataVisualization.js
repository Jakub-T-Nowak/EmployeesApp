import React from "react";
import styles from "./DataVisualization.module.sass";

const DataVisualization = ({ items }) => {
    const employees = items;
    const salaries = employees.map((employee) => employee.salary);
    const maxSalary = Math.max(...salaries);
    const maxSalaryCeil = Math.ceil(maxSalary / 1000) * 1000;

    const heights = salaries.map((salary) => {
        return 100 * (salary / maxSalaryCeil);
    });

    return (
        <div className={styles.visualization}>
            <div className={styles.visualization__header}>Salary</div>

            <div className={styles.visualization__data}>
                <div className={styles["y-description"]}>{maxSalaryCeil}</div>
                <div className={styles["y-description"]}>{maxSalaryCeil / 2}</div>
                <div className={styles["y-description"]}>0</div>

                <div className={styles.lines}>
                    <div className={styles["lines-center"]}></div>
                </div>

                {heights.map((height, i) => (
                    <div
                        className={styles["visualization__data-item"]}
                        style={{ height: `${height}%` }}
                        key={i}
                    ></div>
                ))}
            </div>

            <div className={styles["visualization__data-description"]}>
                {employees.map(({ name }, i) => (
                    <div key={i}>
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataVisualization;
