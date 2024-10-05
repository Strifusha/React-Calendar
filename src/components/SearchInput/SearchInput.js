import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';
import { QuickNavigation } from '../QuickNavigation/QuickNavigation';
import './SearchInput.css';

export const SearchInput = () => {
  return (
    <div className='search-container'>
      <SearchIcon className="search-icon" />

      <input
        className='search-input'
        placeholder='Search transactions, invoices or help'
      />

      <QuickNavigation />
    </div>
  )
}