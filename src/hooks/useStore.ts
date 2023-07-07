import { create } from 'zustand';
import { getLocalStorage } from '../helpers/localStorage';

interface ISearch {
  earthDate: string;
}

interface IStore {
  search: ISearch;
  setSearch: (search: ISearch) => void;
}

const useStore = create<IStore>()((set) => ({
  search: {
    earthDate: getLocalStorage<string>('earthDate') || '',
  },
  setSearch: (search) => set(() => ({ search })),
}));

export default useStore;
