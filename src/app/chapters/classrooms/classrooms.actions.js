import axios from 'axios';

import { API } from 'config';

export default setStateFunc => {
  return {
    clearClassroom: () => setStateFunc({ selectedClassroom: null }),
    newClassroom: () => setStateFunc({ selectedClassroom: { name: '' } }),
    classroomInfo: (key, value, prevClassroom) => {
      prevClassroom[key] = value;
      setStateFunc({ selectedClassroom: prevClassroom });
    },
    createClassroom: classroomInfos => {
      return axios
        .post(`${API}/classrooms`, classroomInfos)
        .then(_ => axios.get(`${API}/classrooms`))
        .then(_ => setStateFunc({ classrooms: _.data, isLoadingList: false }));
    },
    updateClassroom: classroomInfos => {
      return axios
        .put(`${API}/classrooms/${classroomInfos._id}`, classroomInfos)
        .then(_ => axios.get(`${API}/classrooms`))
        .then(_ => setStateFunc({ classrooms: _.data, isLoadingList: false }));
    },
    loadClassroom: id => {
      setStateFunc({ isLoadingClassroom: true });

      return axios
        .get(`${API}/classrooms/${id}`)
        .then(_ =>
          setStateFunc({ selectedClassroom: _.data, isLoadingClassroom: false })
        );
    },
    loadClassrooms: id => {
      setStateFunc({ isLoadingList: true });

      return axios
        .get(`${API}/classrooms`)
        .then(_ => setStateFunc({ classrooms: _.data, isLoadingList: false }));
    },
    deleteClassroom: id => {
      return axios
        .delete(`${API}/classrooms/${id}`)
        .then(_ => axios.get(`${API}/classrooms`))
        .then(_ => setStateFunc({ classrooms: _.data, isLoadingList: false }));
    },
    classroomsFilter: filter => setStateFunc({ classroomsFilter: filter }),
  };
};
