import axios from 'axios';

import {API} from 'config';

export default setStateFunc => {
  return {
    clearStudent: () => setStateFunc({ selectedStudent: null }),
    newStudent: () =>
      setStateFunc({ selectedStudent: { lastname: '', firstname: '' } }),
    studentInfo: (key, value, prevStudent) => {
      prevStudent[key] = value;
      setStateFunc({ selectedStudent: prevStudent });
    },
    createStudent: studentInfos => {
      return axios
        .post(`${API}/students`, studentInfos)
        .then(_ => axios.get(`${API}/students`))
        .then(_ => setStateFunc({ students: _.data, isLoadingList: false }));
    },
    updateStudent: studentInfos => {
      return axios
        .put(`${API}/students/${studentInfos._id}`, studentInfos)
        .then(_ => axios.get(`${API}/students`))
        .then(_ => setStateFunc({ students: _.data, isLoadingList: false }));
    },
    loadStudent: id => {
      setStateFunc({ isLoadingStudent: true });

      return axios
        .get(`${API}/students/${id}`)
        .then(_ =>
          setStateFunc({ selectedStudent: _.data, isLoadingStudent: false })
        );
    },
    loadStudents: id => {
      setStateFunc({ isLoadingList: true });

      return axios
        .get(`${API}/students`)
        .then(_ => setStateFunc({ students: _.data, isLoadingList: false }));
    },
    deleteStudent: id => {
      return axios
        .delete(`${API}/students/${id}`)
        .then(_ => axios.get(`${API}/students`))
        .then(_ => setStateFunc({ students: _.data, isLoadingList: false }));
    },
    studentsFilter: filter => setStateFunc({ studentsFilter: filter }),
  };
};
