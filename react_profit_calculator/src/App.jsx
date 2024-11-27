import { useState } from "react";
import "./style.css";

function App() {
  const [selling_price, setPrice] = useState(0);
  const [material_cost, setMatCost] = useState(0);
  const [logistics_cost, setLogCost] = useState(0);
  const [packaging_cost, setPackCost] = useState(0);
  const [labeling_cost, setLabCost] = useState(0);
  const [marketplace_cost, setMPCost] = useState(0);
  const [amountInput, setAmount] = useState(0);

  let [costs, setCosts] = useState(0);
  let [profit, setProfit] = useState(0);
  let [profitability, setProfitability] = useState(0);
  let [total_income, setIncome] = useState(0);
  let [total_costs, setTotalCosts] = useState(0);
  let [total_profit, setTotalProfit] = useState(0);
  let [total_profitability, setTotalProfitability] = useState(0);


  function getValue() {
    costs = parseFloat(material_cost) + parseFloat(logistics_cost) + parseFloat(packaging_cost) + parseFloat(labeling_cost) + parseFloat(selling_price) / 100 * parseFloat(marketplace_cost);
    profit = parseFloat(selling_price) - costs;
    profitability = costs > 0 ? (profit / parseFloat(costs)) * 100 : 0;
  
    total_income = parseFloat(selling_price) * parseFloat(amountInput);
    total_costs = parseFloat(costs) * parseFloat(amountInput);
    total_profit = parseFloat(total_income) - parseFloat(total_costs);
    total_profitability = total_costs > 0 ? (total_profit / parseFloat(total_costs)) * 100 : 0;

    setCosts(costs);
    setProfit(profit);
    setProfitability(profitability);
    setIncome(total_income);
    setTotalCosts(total_costs);
    setTotalProfit(total_profit);
    setTotalProfitability(total_profitability);
  }
  

  return (
    <div className="calcs">
        <div className="title_calcs">Финансовая модель (React)</div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "priceInput" placeholder = "Цена товара" onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "material_cost" placeholder = "Себестоимость товара" onChange={(e) => setMatCost(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "packagingCostInput" placeholder = "Стоимость упаковки" onChange={(e) => setPackCost(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "logistics_cost" placeholder = "Стоимость логистики" onChange={(e) => setLogCost(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "labeling_cost" placeholder = "Стоимость маркировки" onChange={(e) => setLabCost(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "marketplace_cost" placeholder = "Стоимость маркетплейса %" onChange={(e) => setMPCost(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <input className="input_calcs" type = "text" id = "AmountInput" placeholder = "Количество" onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className="buttons_for_calcs">
            <button className="button_calcs" onClick = {getValue}>Посчитать</button>
        </div>

        <div className = "results">
            Выручка:&nbsp;
            <div id = "result_income">{total_income} рублей</div>
        </div>

        <div className = "results">
            Расходы:&nbsp;
            <div id = "result_costs">{total_costs} рублей</div>
        </div>

        <div className = "results">
            Прибыль:&nbsp;
            <div id = "result_profit">{total_profit} рублей</div>
        </div>

        <div className = "results">
            Рентабельность:&nbsp;
            <div id = "result_rent">{total_profitability} %</div>
        </div>

    </div>
  );
}

export default App;
