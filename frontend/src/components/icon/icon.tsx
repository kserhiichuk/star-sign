import { IconType } from 'react-icons';
import { FaEye, FaEyeSlash, FaRegLightbulb, FaRegTrashAlt, FaTimes } from 'react-icons/fa';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdOutlineMessage,
} from 'react-icons/md';
import styles from './styles.module.css';
import { GoSearch } from 'react-icons/go';
import { IoSend } from 'react-icons/io5';

type IconName =
  | 'cross'
  | 'eye'
  | 'leftArrow'
  | 'leftDoubleArrow'
  | 'rightArrow'
  | 'rightDoubleArrow'
  | 'search'
  | 'strikedEye'
  | 'trashBin'
  | 'send'
  | 'message'
  | 'idea';

type Properties = {
  height: number;
  name: IconName;
  width: number;
};

const iconNameToSvg: Record<IconName, IconType> = {
  cross: FaTimes,
  eye: FaEye,
  leftArrow: MdKeyboardArrowLeft,
  leftDoubleArrow: MdKeyboardDoubleArrowLeft,
  rightArrow: MdKeyboardArrowRight,
  rightDoubleArrow: MdKeyboardDoubleArrowRight,
  search: GoSearch,
  strikedEye: FaEyeSlash,
  trashBin: FaRegTrashAlt,
  send: IoSend,
  message: MdOutlineMessage,
  idea: FaRegLightbulb,
};

const Icon = ({ height, name, width }: Properties): JSX.Element => {
  const SvgComponent = iconNameToSvg[name];

  return <SvgComponent className={styles['icon']} style={{ height: `${height}px`, width: `${width}px` }} />;
};

export { Icon };
