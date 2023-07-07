import { createContext, useContext, useState } from 'react';

interface IContext {
  selectValue: string;
  changeSelectValue: (value: string) => void;
}

const Context = createContext<IContext>({} as IContext);

interface Props {
  children: React.ReactNode;
}
export const SelectValueProvider = ({ children }: Props) => {
  const [selectValue, setSelectValue] = useState('');

  const changeSelectValue = (value: string) => setSelectValue(value);
  const contextValue = {
    selectValue,
    changeSelectValue,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useSelectValue = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useSelectValue must be used within a SelectValueProvider');
  }
  return context;
};
