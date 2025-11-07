import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ["#0088fe", "#ffbb28", "#ff8042", "#00c49f"];

const data = [
    { id: 1, title: "salary", amount: 12356},
    { id: 2, title: "gift", amount: 1365.65},
    { id: 3, title: "home rent", amount: -4422.65},
    { id: 4, title: "grocery", amount: -365.54}
]

let amounts = data.map((item,index) => Number(item.amount))

let income = amounts.filter(item=> item > 0).reduce((ac,cu) => ac + cu, 0).toFixed(2);
let expense = amounts.filter(item=> item < 0).reduce((ac,cu) => ac + cu, 0) * -1;

console.log(`income =`,income)
console.log(`expense =`,expense)

const chartData = [
    { name: "Income", value: 65 },
    { name : "Expense", value: 35 }
]

function ExpenseChart() {
  return (
    <div className="p-2">
        <h5>Expense & Income (%) </h5>
       <PieChart width={300} height={200}>
            <Pie
                data={chartData}
                dataKey={"value"}
                nameKey={"name"}
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
                label>
            {
                chartData?.map((item,index) => {
                    return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
                })
            }
            </Pie>
            <Tooltip/>
            <Legend/>
       </PieChart>
    </div>
  )
}

export default ExpenseChart
