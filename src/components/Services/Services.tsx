import { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import usePagination from '../../hooks/usePagination';
import { data, RootObject } from '../../initialValues/initialValues';
import ServiceRow from '../ServiceRow/ServiceRow';

const Services = () => {
  const [services, setServices] = useState<[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setServices(data);
    }, 1000);
  }, []);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: data.length,
  });

  console.log(services);

  return (
    <div>
      <Table bordered hover responsive='sm'>
        <thead>
          <tr className='th-title'>
            <th>Номер / Дата</th>
            <th>Тип задания / автор</th>
            <th>Аккаунт / Терминал</th>
            <th className='status'>Статус</th>
          </tr>
        </thead>
        <tbody>
          {services
            ?.slice(firstContentIndex, lastContentIndex)
            .map((el: RootObject) => (
              <ServiceRow
                key={el.id}
                id={el.id}
                created_date={el.created_date}
                order_type={el.order_type}
                created_user={el.created_user}
                account={el.account}
                terminal={el.terminal}
                status={el.status}
              />
            ))}
        </tbody>
      </Table>
      <div className='pagination'>
        <Pagination>
          <Pagination.First onClick={() => setPage(1)} />
          <Pagination.Prev onClick={prevPage} />
          <Pagination.Item disabled>
            Страница {page} / {totalPages}
          </Pagination.Item>
          <Pagination.Next onClick={nextPage} />
          <Pagination.Last onClick={() => setPage(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
};

export default Services;
