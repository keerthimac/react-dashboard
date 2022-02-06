import "./featuredInfo.css";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revanue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last Month</div>
      </div>
      {/* Sales */}
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last Month</div>
      </div>
      {/* Cost */}
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>
          <span className='featuredMoneyRate'>
            -11.4 <ArrowUpwardIcon className='featuredIcon' />
          </span>
        </div>
        <div className='featuredSub'>Compared to last Month</div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
