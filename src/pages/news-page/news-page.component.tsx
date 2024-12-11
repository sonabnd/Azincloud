import { en } from '../../assets/lang/en';
import css from './news-page.module.scss';
import searchIcon from '../../assets/images/statics/search-normal.png';
import filterIcon from '../../assets/images/statics/filter.png';
import noResult from '/src/assets/images/statics/noResultIcon.png'
import NewsCardComponent from '../../core/shared/news-card/news-card.component';
import { useNews } from '../../core/shared/news-card/actions/news-card.query';
import { useCallback, useState } from 'react';
import FilterComponent from './components/filter.component';

const NewsPageComponent = () => {
  const { data = [] } = useNews();
  const [inputVal, setInputVal] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const newsData = [
    {
      searchIcon: searchIcon,
      filterIcon: filterIcon,
    },
  ];

  const searchFunc = useCallback((e: any) => (
    setInputVal(e)
  ), [])


  const filteredArr = data.filter((item) => item.heading.toLowerCase().includes(inputVal.toLowerCase()))

  return (
    <div className="container">
      <div className={css.header}>
        <h2>{en.news_blog_title}</h2>
        <div className={css.searchFilter}>
          {
            newsData.map((item) => (
              <div className={css.filterContainer}>
                <input className={css.searchInput} type="text" placeholder={en.news_search_text} onChange={(e) => searchFunc(e.target.value)} value={inputVal} />
                <img className={css.searchIcon} src={item.searchIcon} alt={en.img_alt} />
                <img className={css.filterIcon} src={item.filterIcon} alt={en.img_alt} onClick={toggleDropdown} />
              </div>
            ))
          }
          {isDropdownOpen && (
            <FilterComponent />
          )}
        </div>
      </div>
      <div className={css.news}>
      {filteredArr.length > 0 ? (
          filteredArr.map((news) => (
            <div className={css.card} key={news.id}>
              <NewsCardComponent news={news} />
            </div>
          ))
        ) : (
          <div className={css.noResult}>
            <img src={noResult} alt="" />
            <p>No results were found in your result</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPageComponent;
