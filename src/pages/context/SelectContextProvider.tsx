import { createContext, useContext, useState } from 'react';

interface IContext {
  selectValue: string;
  changeSelectValue: (value: string) => void;
  page: number;
  incrementPage: () => void;
  resetPage: () => void;
}

const Context = createContext<IContext>({} as IContext);

interface Props {
  children: React.ReactNode;
}
export const SelectValueProvider = ({ children }: Props) => {
  if (!children) throw new Error('No children passed');
  const [selectValue, setSelectValue] = useState('');
  const [page, setPage] = useState(1);

  const changeSelectValue = (value: string) => setSelectValue(value);
  const incrementPage = () => setPage((prev) => prev + 1);

  const resetPage = () => setPage(1);
  const contextValue = {
    selectValue,
    changeSelectValue,
    page,
    incrementPage,
    resetPage,
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
