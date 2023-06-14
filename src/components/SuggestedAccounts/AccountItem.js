import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';

import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function AccountItem() {
    // render
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[0, 100]} render={renderPreview} placement="bottom" offset={[-20, 5]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/3927/63da2f11ce330.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguyenphu</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Nguyen Quoc Phu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
