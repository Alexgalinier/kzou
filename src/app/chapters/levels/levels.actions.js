import axios from 'axios';

import { API } from 'config';

export default setStateFunc => {
  return {
    clearLevel: () => setStateFunc({ selectedLevel: null }),
    newLevel: () => setStateFunc({ selectedLevel: { name: '' } }),
    levelInfo: (key, value, prevLevel) => {
      prevLevel[key] = value;
      setStateFunc({ selectedLevel: prevLevel });
    },
    createLevel: levelInfos => {
      return axios
        .post(`${API}/levels`, levelInfos)
        .then(_ => axios.get(`${API}/levels`))
        .then(_ => setStateFunc({ levels: _.data, isLoadingList: false }));
    },
    updateLevel: levelInfos => {
      return axios
        .put(`${API}/levels/${levelInfos._id}`, levelInfos)
        .then(_ => axios.get(`${API}/levels`))
        .then(_ => setStateFunc({ levels: _.data, isLoadingList: false }));
    },
    loadLevel: id => {
      setStateFunc({ isLoadingLevel: true });

      return axios
        .get(`${API}/levels/${id}`)
        .then(_ =>
          setStateFunc({ selectedLevel: _.data, isLoadingLevel: false })
        );
    },
    loadLevels: id => {
      setStateFunc({ isLoadingList: true });

      return axios
        .get(`${API}/levels`)
        .then(_ => setStateFunc({ levels: _.data, isLoadingList: false }));
    },
    deleteLevel: id => {
      return axios
        .delete(`${API}/levels/${id}`)
        .then(_ => axios.get(`${API}/levels`))
        .then(_ => setStateFunc({ levels: _.data, isLoadingList: false }));
    },
    levelsFilter: filter => setStateFunc({ levelsFilter: filter }),
  };
};
