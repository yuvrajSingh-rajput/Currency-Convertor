import { useState } from 'react';
import useCurrencyFromAPI from './CustomHooks/useCurrencyFromAPI';
import InputComponent from './components/InputComponent';

function App() {
  const [amount, setAmount] = useState(0);
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const fetchedData = useCurrencyFromAPI(from);
  const requiredObject = fetchedData[from];
  const options = requiredObject ? Object.keys(requiredObject) : [];

  const swap = () => {
    let tempAmount = amount;
    setAmount(calculatedAmount);
    setCalculatedAmount(tempAmount);

    let tempCurrency = from;
    setFrom(to);
    setTo(tempCurrency);
  }

  const convert = () => {
    if (requiredObject && requiredObject[to]) {
      setCalculatedAmount(amount * requiredObject[to]);
    }
  }

  return (
    <>
      <div className="h-screen bg-[url('https://img.freepik.com/premium-vector/money-transfer-global-currency-stock-exchange_115579-923.jpg')] bg-cover bg-center brightness-125 contrast-125">
        <div className="flex justify-center items-center flex-wrap h-full">
          <div className="w-full max-w-md m-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 grid gap-2">
            <InputComponent label="From" amount={amount} setAmount={setAmount} calculatedAmount={calculatedAmount} setCalculatedAmount={setCalculatedAmount} selectedCurrency={from} setSelectedCurrency={setFrom} currencyOptions={options} writePermission={true} />

            <div className="flex justify-center w-full relative">
              <button onClick={swap} className=' bg-blue-600 text-white w-fit px-2 py-2 absolute -translate-y-5 rounded-lg'>swap</button>
            </div>

            <InputComponent label="To" amount={calculatedAmount} setAmount={setCalculatedAmount} selectedCurrency={to} setSelectedCurrency={setTo} currencyOptions={options} writePermission={false} />

            <button className=' bg-blue-700 py-3 text-white rounded-md mt-1' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
