import { useState } from 'react';

const types = {
  rocket: 'THIS IS THE ROCKET',
  page: 'THIS IS THE PAGE'
}

const useTitle = (type) => {
  const [title, setTitle] = useState('')

  const createTitle = (val) => {
    const prefix = types[type]
    setTitle(`${prefix} ${val}`)
  };

  return {
    title,
    createTitle
  };
};

export default useTitle;