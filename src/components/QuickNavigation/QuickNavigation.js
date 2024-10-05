import { ReactComponent as NotificationIcon } from '../../images/notification-icon.svg';
import { ReactComponent as ChatIcon } from '../../images/chat-icon.svg';
import { ReactComponent as SettingsIcon } from '../../images/settings-icon.svg';
import Avatar from '../../images/avatar.png';

export const QuickNavigation = () => {
  return (
    <div className='icon-container'>
      <SettingsIcon className='icon' />
      <ChatIcon className='icon' />
      <NotificationIcon className='notification icon' />

      <span className='vertical-line'></span>

      <select className='select-name'>
        <option value='1'>John Doe</option>
      </select>
      <img src={Avatar} alt='User Avatar' className='avatar'/>
    </div>
  )
}