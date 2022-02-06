import "./widgetSm.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmListImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmListImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmListImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmListImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetSmListImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUserName'>Anna Keller</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
