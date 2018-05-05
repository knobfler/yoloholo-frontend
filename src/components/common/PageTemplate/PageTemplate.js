import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import PageHeader from 'components/common/PageHeader';
import PageFooter from 'components/common/PageFooter';

const cx = classNames.bind(styles);

const PageTemplate = () => (
  <div className={cx('page-template')}>
    <PageHeader/>
    <main>
    </main>
    <PageFooter/>
  </div>
);

export default PageTemplate;