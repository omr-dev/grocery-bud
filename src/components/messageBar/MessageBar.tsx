import styles from './messageBar.module.css';


type PropsMessageBar={
    message:{
        text:string,
        variant:string
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
