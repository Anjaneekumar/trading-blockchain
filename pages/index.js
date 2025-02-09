//Components
import Header from "../components/Header";
import PortfolioChart from '../components/PortfolioChart'
import BuyTokens from '../components/BuyTokens'
import Notice from '../components/Notice'
import Assets from "../components/Assets";

//Icons
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const style = {
  wrapper: "w-screen h-screen flex flex-col",
  mainContainer: "w-2/3 h-full m-auto flex mt-16",
  leftMain: "flex flex-col w-3/4 h-full  p-6 overflow-y-scroll",
  portfolioAmountContainer: "flex flex-col ",
  portfolioAmount: "text-white text-4xl",
  portfolioPercent: "text-white font-bold text-sm",
  pastHour: "text-gray-400",
  chartContainer:
    "text-5xl flex justify-center w-full h-1/3 text-white mt-11 mb-11",
  buyingPowerContainer:
    "w-full border-t mb-24 border-b h-16 border-[#30363b] flex justify-between items-center p-4",
  buyingPowerTitle: "text-white font-bolder text-lg",
  buyingPowerAmount: "text-white font-bolder text-xl",
  notice: "flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1",
  noticeContainer: "flex-1",
  noticeTitle: "text-gray-500",
  noticeMessage: "text-white font-bold",
  noticeCTA: "font-bold text-green-500 cursor-pointer mt-5",
  rightMain:
    "flex flex-col flex-1 h-4/5 bg-[#1E2123] mt-6 rounded-lg overflow-y-scroll noScroll",
  rightMainItem: "flex items-center text-white p-5 border-b border-[#30363b]",
  ItemTitle: "flex-1 font-bold",
  moreOptions: "cursor-pointer text-xl",
};
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header/>
      <div className={style.mainContainer}>
        <div className={style.leftMain}>
          <div className={style.portfolioAmountContainer}>
            <div className={style.portfolioAmount}> 23 ETH</div>
            <div className={style.portfolioPercent}>
              +0.0008(+0.57%)
              <span className={style.pastHour}>Past Hour</span>
            </div>
          </div>
          <div>
            <div className={style.chartContainer}>
            <PortfolioChart/>
            </div>
          </div>
          <div className={style.buyingPowerContainer}>
            <div className={style.buyingPowerTitle}>Buying Power</div>
            <div className={style.buyingPowerAmount}>12 ETH</div>
          </div>
          <div className={style.notice}>
            <div className={style.noticeContainer}>
              <div className={style.noticeTitle}>Send Funds</div>
              <div className={style.noticeMessage}>
                Transfer Your Funds here
              </div>
              <BuyTokens/>
            </div>
          </div>
          <Notice/>
        </div>

        <div className={style.rightMain}>
          <div className={style.rightMainItem}>
            <div className={style.ItemTitle}> Crypto Currencies</div>
            <BiDotsHorizontalRounded className={style.moreOptions} />
          </div>
          {/* Map through coins and for every coin make Asset components */}
          <Assets coin={"BTC"} price={0.89} />
          <Assets coin={"USDC"} price={-3} />
          <Assets coin={"SOL"} price={69} />
          <Assets coin={"ETH"} price={5} />
          <div className={style.rightMainItem}>
            <div className={style.ItemTitle}>Lists</div>
            <AiOutlinePlus className={style.moreOptions} />            
          </div>
        </div>
      </div>
    </div>
  )
}
