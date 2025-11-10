import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ["#0088fe", "#ffbb28", "#ff8042", "#00c49f"];


function ExpenseChart(props) {
    const { bal, incm, exps } = props
    
const chartData = [
    { name: "Balance", value: bal/100 },
    { name : "Expense", value: exps/100 }
]
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
