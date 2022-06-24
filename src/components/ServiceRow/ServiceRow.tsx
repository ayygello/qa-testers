import { RootObject } from '../../initialValues/initialValues';
import moment from 'moment';
import { shortName, style } from '../../util/util';
import { Link } from 'react-router-dom';

const ServiceRow = ({
  id,
  created_date,
  order_type,
  created_user,
  account,
  terminal,
  status,
}: RootObject) => {
  const createdUser: string = shortName(
    created_user.surname,
    created_user.name,
    created_user.patronymic
  );

  return (
    <tr>
      <td>
        <ul>
          <li className='li-main'>{`№${id}`}</li>
          <li className='li-secondary'>
            {moment(created_date).format('DD.MM.YYYY HH:mm')}
          </li>
        </ul>
      </td>
      <td>
        <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <ul>
            <li className='li-main'>{order_type.name} </li>
            <li className='li-secondary'> {createdUser}</li>
          </ul>
        </Link>
      </td>
      <td>
        <ul>
          <li className='li-main'>{account.name}</li>
          <li className='li-secondary'>{terminal.name}</li>
        </ul>
      </td>
      <td>
        <div className={style(status)}>{status}</div>
      </td>
    </tr>
  );
};

export default ServiceRow;
