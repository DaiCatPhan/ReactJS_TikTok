import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            {/* header */}
            <div className={cx('header')}>
                <img
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/3927/63da2f11ce330.jpg"
                    alt=""
                    className={cx('avatar')}
                />
                <div>
                    <Button primary>Follow</Button>
                </div>
            </div>

            {/* body */}
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Nguyen Quoc Phu</p>

                {/* thongke */}
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follows</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
