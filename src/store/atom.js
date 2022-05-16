import { atom } from 'recoil';
import { localStorageEffect } from './localStorage';

export const listState = atom({
  key: 'listState',
  default: [],
  effects: [localStorageEffect('todo_list')],
});
