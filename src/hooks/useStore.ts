import { create } from 'zustand';

interface ISearch {
  earthDate: string;
}

interface IStore {
  search: ISearch;
  setSearch: (search: ISearch) => void;
}

const useStore = create<IStore>()((set) => ({
  search: {
    earthDate: '',
  },
  setSearch: (search) => set(() => ({ search })),
}));

export default useStore;
