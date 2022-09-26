import '../../css/boxanketa.css';
import '../../css/anketa.css';
const BoxAnketa = (props) => {
  const name = props.alt;
  const clicks = () => props.getBoxClick(name);
  let classNames;
  if (props.className !== undefined) {
    classNames = props?.className.split(' ');
  }
  return (
    <div onClick={clicks} className={`${classNames ? classNames[0] : ''} block_anketa em-05`}>
      <div className='hover_icon h-100'><div className={`${props?.className} p-t-119`}></div></div>
    </div>
  );
}

export default BoxAnketa;
