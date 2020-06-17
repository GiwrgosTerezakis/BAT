

export const changeSelect = nr => {
  return {
    type: 'CHANGE', 
    payload : nr
  };
};

export const saveInfo = Info => {
  return {
    type: 'INFO', 
    payload : Info
  };
};
