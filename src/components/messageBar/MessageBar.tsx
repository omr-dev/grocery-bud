import styles from './messageBar.module.css';
type MessageVariant="danger"|"success";

type PropsMessageBar={
    message:{
        text:string,
        variant:MessageVariant
    }
}
const MessageBar = ({message}:PropsMessageBar) => {
    const {text,variant}=message;
    return (
        <div>
            <p className={styles.messageText + " " + styles[variant]}>{text}</p>
        </div>
    );
};

export default MessageBar;
