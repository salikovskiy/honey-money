import { connect } from 'react-redux';
import {logOut} from '../../redux/actions'

const Header = (props) => {
    console.log('props', props)
    return (
  <div className={style.header}>
    <Link to="/dashboard">
      <img className={style.header_logo} src={svg} alt="logo" />
    </Link>
    <div className={style.header_user}>
      {/* <p className={style.header_user_name}>User Name</p> */}
      <button onClick={()=>props.logOut()} type="button" className={style.header_user_logout}>Выйти</button>
    </div>
  </div>
//   <div className={style.modal}>
//     <p className={style.modal_text}>Вы действительно хотите выйти?</p>
//     <div className={style.modal_button}>
//     <button type="button" className={style.modal_button_yes}>Да</button>
//     <button type="button" className={style.modal_button_no}>Нет</button>
//     </div>
//   </div>
  
)};
const mapDispatchToProps =  {
    logOut,
  };

export default connect(null, mapDispatchToProps) (Header);