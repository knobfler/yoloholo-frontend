import React from 'react';
import styles from './PageHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PageHeader = () => (
  <div className={cx('page-header')}> 
      <Link to="/" className={cx('logo')}>
        YoloHolo
      </Link>
      <div className={cx('right')}>
        <div className={cx('menu')}>
          일정 추가하기
        </div>
        <Link to="/login" className={cx('menu')}>
          로그인/회원가입
        </Link>
      </div>
  </div>
);

export default PageHeader;