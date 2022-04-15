import React from "react";

const style = {
  notice: "flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1",
  noticeContainer: "flex-1",
  noticeTitle: "text-gray-500",
  noticeMessage: "text-white font-bold",
  noticeCTA: "font-bold text-green-500 cursor-pointer mt-5",
};

const Notice = () => {
  return (
    <div className={style.notice}>
      <div className={style.noticeContainer}>
      <div className={style.noticeTitle}>Fund Your Account</div>
      <div className={style.noticeMessage}>
      Your Bank Account is ready! Fund your account to begin trading.
      </div>
      </div>
      <div className={style.noticeCTA}>Add Funds</div>
    </div>
  );
};

export default Notice;
