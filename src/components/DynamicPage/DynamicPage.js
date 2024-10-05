import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MyCalendar from '../MyCalendar/MyCalendar';

export const DynamicPage = () => {
  const { item } = useParams();

  const pageContent = useMemo(() => {
    return item === 'calendar' ? <MyCalendar /> : <p>This is your {item} Page</p>;
  }, [item]);

  return (
    <div>
      {pageContent}
    </div>
  );
};
