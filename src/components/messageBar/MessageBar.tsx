import styles from './messageBar.module.css';

const MessageBar = () => {
    return (
        <div>
            <p className={styles.messageText + " " + styles.success}>Item Added To The List</p>
        </div>
    );
};

export default MessageBar;
