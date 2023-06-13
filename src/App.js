import './App.css';
import Employee from './containers/Employee';
import EmployeeFun from './containers/EmployeeFun';
import StudentFun from './containers/StudentFun';
import Students from './containers/Students';
// import Counter from './containers/counter';

function App() {
  return (
    <>
      <Students />
      <StudentFun />
      <Employee />
      <EmployeeFun />
      {/* <Counter /> */}
    </>
  );
}
export default App;
