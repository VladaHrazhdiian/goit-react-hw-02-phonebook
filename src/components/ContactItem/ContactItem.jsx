import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <Item>
      <span>{name}</span>
      <span> {number}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Item>
  );
};



ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

