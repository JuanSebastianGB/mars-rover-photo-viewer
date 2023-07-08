import { create } from 'zustand';
import { getCurrentDate } from '../helpers';
import { getLocalStorage } from '../helpers/localStorage';
import { PhotoModel } from '../models';

interface ISearch {
  earthDate: string;
  sol: number;
  applySol: boolean;
}

interface IStore {
  search: ISearch;
  setSearch: (search: ISearch) => void;
  changeApplySol: () => void;
  favorites: PhotoModel[];
  addFavorite: (photo: PhotoModel) => void;
  removeFavorite: (photo: PhotoModel) => void;
}

const useStore = create<IStore>()((set) => ({
  search: {
    earthDate: getLocalStorage('earthDate') || getCurrentDate(),
    sol: getLocalStorage('sol') || 0,
    applySol: getLocalStorage('applySol') || false,
  },
  setSearch: (search) => set(() => ({ search })),
  changeApplySol: () =>
    set((state) => ({
      search: { ...state.search, applySol: !state.search.applySol },
    })),
  favorites: getLocalStorage('favorites') || [],
  addFavorite: (photo) =>
    set((state) => {
      const favorites = [...state.favorites, photo];
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return { favorites };
    }),
  removeFavorite: (photo) =>
    set((state) => {
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== photo.id
      );
      localStorage.setItem('favorites', JSON.stringify(favorites));
      return { favorites };
    }),
}));

export default useStore;
