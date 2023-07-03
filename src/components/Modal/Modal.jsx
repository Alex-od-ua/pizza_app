import { forwardRef } from 'react';
import styles from './Modal.module';

export const Modal = forwardRef(({ data }, ref) => {
  return (
    <div className={styles.modal} ref={ref}>
      <h3> {data} </h3>
    </div>
  );
});

// const [showModal, setShowModal] = useState(false)
// const modalRef = useRef(null)

// const closeModal = () => {
// setShowModal(false)
// }

// useEffect(() => {
// const listener = (event) => {
// if (!modalRef.current || modalRef.current.contains(event.target)) {
// return
// }
// closeModal()
// }
// document.addEventListener("mousedown", listener)
// document.addEventListener("touchstart", listener)
//
// return () => {
// document.removeEventListener("mousedown", listener)
// document.removeEventListener("touchstart", listener)
//}
//
// }, [modalRef])

// <div onClick={() => setShowModal(true)>
// { modalShow ?? <Modal data={data} ref={modalRef} /> }
// </div>
