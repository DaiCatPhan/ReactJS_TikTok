import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/00d42c78a7145ba5e6b083e2333bf984~c5_300x300.webp?x-expires=1686542400&x-signature=%2FlWgsXu0FO5KMWflZxwIfdzVJck%3D"
                alt=""
                className={cx('avartar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Phan Dai Cat</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phandaicat</span>
            </div>
        </div>
    );
}

export default AccountItem;
