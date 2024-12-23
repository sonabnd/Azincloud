import { Pagination } from 'antd';

const PaginationComponent: React.FC = () => {
  return (
    <div >
      <Pagination
        defaultCurrent={1}   
        total={100}          
        showSizeChanger={false}      
      />
    </div>
  );
};

export default PaginationComponent;
