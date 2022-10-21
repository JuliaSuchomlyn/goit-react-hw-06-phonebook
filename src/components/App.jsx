import { useEffect } from 'react';
import { Form } from './Form/Form';
import { ContactsList } from "./ContactsList/ContactsList"
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
    
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const formSubmitHandler = (name, number) => {
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`)
    }
    {
      const action = addContact({ name, number })
      dispatch(action);
    }
  };  

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value))
    };

  const deleteContact = id => {
    console.log(id)
    dispatch(removeContact(id));
  }

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
  );
  
  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}>
        <div className='container__element'>
            <h2>Phonebook</h2>
            <Form formSubmitHandler={formSubmitHandler} />
            <h2>Contacts</h2>
            <Filter filter={filter}
          onChange={changeFilter}
        />
            <ContactsList
                contacts={visibleContacts}
                deleteContacts={deleteContact}
            />
        </div>
    </div>
  )
  }
