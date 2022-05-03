import React from 'react';
import { Result } from 'antd';
import styles from './index.module.scss';

function Error() {
  return (
    <div className={styles.error}>
      <Result subTitle="Sorry, something went wrong."/>
    </div>
  );
}

export default Error;