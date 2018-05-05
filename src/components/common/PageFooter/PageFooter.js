import React from 'react';
import styles from './PageFooter.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const PageFooter = () => (
  <div className={cx('page-footer')}>
      <Link to="/" className={cx('logo')}>
        YoloHolo
      </Link>
  </div>
);

export default PageFooter;