import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styles from './index.module.scss'
// components
import Loader from '../Loader/Index';
import Error from '../Error';
import Authoriztion from '../Auth/Index';
import NewsList from '../NewsList/Index';
import NewsInput from '../NewsInput/Index';

const GET_PATH = gql`
  query MyQuery {
    todos {
      id
      title
    }
  }
`;

function Wrapper() {
  const { loading, error, data } = useQuery(GET_PATH);
  if (loading) return <Loader />
  if (error) return <Error/>;

  return (
    <div className={styles.wrapper}>
      <Authoriztion /> {/* Work in progress  */}
      <NewsList data={data.todos} />  
      <NewsInput /> {/* Work in progress */}
    </div>
  );
}

export default Wrapper;
