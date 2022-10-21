// import { useState, useEffect } from 'react';
import { useEffect } from 'react';
// import { nanoid } from "nanoid";
import { Form } from './Form/Form';
import { ContactsList } from "./ContactsList/ContactsList"
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getFilter } from 'redux/filter/filter-selectors';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selectors';
import { addContact, removeContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';
// import { addContact, removeContact, setFilter } from 'redux/filter/filter-actions';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
    // const [contacts, setContacts] = useState(() => {
    //     return (
    //   JSON.parse(localStorage.getItem('contacts')) ?? [
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //   ]
    // );
    // });
    // const [filter, setFilter] = useState('');
    
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
      
      // contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())


        // ? alert(`${name} is already in contacts`)
        // : setContacts([
        //     ...contacts,
        //     {
        //       id: nanoid(),
        //       name,
        //       number,
        //     },
        //   ]);
    };
  

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value))
    //   setFilter(e.currentTarget.value);
    };

  const deleteContact = id => {
    console.log(id)
      // const action = removeContact(id)
      dispatch(removeContact(id));
    }

    //   setContacts(contacts.filter(({id}) => id !== contactId));
    // };

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
