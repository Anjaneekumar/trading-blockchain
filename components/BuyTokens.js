import React from "react";

const style = {
  inputAmount: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  formContainer: `flex items-center`,
  select: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  options: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white`,
  noticeCTA: "font-bold text-green-500 cursor-pointer mt-5",
};

const BuyTokens = () => {
  return (
    <form className={style.formContainer}>
      <div className="flex h-full w-full flex-col items-center">
        <select className={style.select}>
          <option className={style.options} >BTC</option>
          <option className={style.options} >ETH</option>
          <option className={style.options} >SOL</option>
          <option className={style.options} >USDC</option>
        </select>
        <input 
        placeholder="Amount..."
        className={style.inputAmount}
        type="text" />
        <button className={style.noticeCTA} type='submit'>
          Send
        </button>
      </div>
    </form>
  );
};

export default BuyTokens;
