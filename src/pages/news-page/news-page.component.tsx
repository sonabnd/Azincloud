import { en } from '../../assets/lang/en';
import css from './news-page.module.scss';
import searchIcon from '../../assets/images/statics/search-normal.png';
import filterIcon from '../../assets/images/statics/filter.png';
import noResult from '/src/assets/images/statics/noResultIcon.png'
import NewsCardComponent from '../../core/shared/news-card/news-card.component';
import { useNews } from '../../core/shared/news-card/actions/news-card.query';
import { useCallback, useState } from 'react';
import useLocalization from '../../assets/lang';
import PaginationComponent from './components/pagination/pagination.component';
import FilterComponent from './components/filter/filter.component';

const NewsPageComponent = () => {
  const translate = useLocalization()

  const { data = [] } = useNews();
  const [inputVal, setInputVal] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [])

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
    <div className='container'>
      <div className={css.newsContainer}>
        <div className={css.header}>
          <h2>{translate('news_blog_title')}</h2>
          <div className={css.searchFilter}>
            {
              newsData.map((item) => (
                <div className={css.filterContainer}>
                  <input className={css.searchInput} type='text' placeholder={en.news_search_text} onChange={(e) => searchFunc(e.target.value)} value={inputVal} />
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
        <div className="row">
          {filteredArr.length > 0 ? (
            filteredArr.map((news) => (
              <div className='col-lg-4 col-md-6 col-12' style={{ marginBottom: '20px' }} key={news.id}>
                <NewsCardComponent news={news} />
              </div>
            ))
          ) : (
            <div className={css.noResult}>
              <img src={noResult} alt="" />
              <p>{translate('no_result')}</p>
            </div>
          )}
        </div>
        <div className={css.pagination}>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
}

export default NewsPageComponent;
