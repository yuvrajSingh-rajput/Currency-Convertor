import React from 'react';

function InputComponent({
    label,
    amount,
    setAmount = () => {},
    selectedCurrency = "",
    setSelectedCurrency,
    currencyOptions = [],
    writePermission = false
}) {
    return (
        <div className="flex w-full justify-between text-xl text-black bg-white px-3 rounded-md py-2">
            <div className="mr-4">
                <p className="">{label}</p>
                <div className="">
                    <input
                        type="number"
                        placeholder='0'
                        value={amount}
                        disabled={!writePermission}
                        onChange={(event) => setAmount && setAmount(Number(event.target.value))}
                        className="bg-[#b3b1af] outline-none"
                    />
                </div>
            </div>
            <div className="">
                <h3>Currency Type</h3>
                <div className="">
                    <select
                        value={selectedCurrency}
                        onChange={(event) => setSelectedCurrency && setSelectedCurrency(event.target.value)}
                        className=""
                    >
                        {currencyOptions.map((currency, index) => (
                            <option key={index} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default InputComponent;
