import { create } from 'zustand';
import { getCurrentDate } from '../helpers';
import { getLocalStorage } from '../helpers/localStorage';

interface ISearch {
  earthDate: string;
  sol: number;
  applySol: boolean;
}

interface IStore {
  search: ISearch;
  setSearch: (search: ISearch) => void;
  changeApplySol: (applySol: boolean) => void;
}

const useStore = create<IStore>()((set) => ({
  search: {
    earthDate: getLocalStorage<string>('earthDate') || getCurrentDate(),
    sol: getLocalStorage<number>('sol') || 0,
    applySol: getLocalStorage<boolean>('applySol') || false,
  },

  setSearch: (search) => set(() => ({ search })),
  changeApplySol: () =>
    set((state) => ({
      search: { ...state.search, applySol: !state.search.applySol },
    })),
}));

export default useStore;
