import React from "react";
import "./DataVisualization.sass";

const DataVisualization = ({ items }) => {
    const employees = items;
    const salaries = employees.map((employee) => employee.salary);
    const maxSalary = Math.max(...salaries);
    const maxSalaryCeil = Math.ceil(maxSalary / 1000) * 1000;

    const heights = salaries.map((salary) => {
        return 100 * (salary / maxSalaryCeil);
    });

    return (
        <div className="visualization">
            <div className="visualization__header">Salary</div>

            <div className="visualization__data">
                <div className="y-description__max">{maxSalaryCeil}</div>
                <div className="y-description__med">{maxSalaryCeil / 2}</div>
                <div className="y-description__min">0</div>

                <div className="lines">
                    <div className="lines-center"></div>
                </div>

                {heights.map((height) => (
                    <div
                        className="visualization__data-item"
                        style={{ height: `${height}%` }}
                    ></div>
                ))}
            </div>

            <div className="visualization__data-description">
                {employees.map(({ name }) => (
                    <div>
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataVisualization;
