import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <li className={css.card}>
      <div className={css.cardWrapper}>
        <div className={css.nameWrapper}>
          <BsPersonFill />
          <p className={css.name}>{name}</p>
        </div>

        <div className={css.numberWrapper}>
          <FaPhone />
          <p className={css.number}>{number}</p>
        </div>
        <button className={css.deleteBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
