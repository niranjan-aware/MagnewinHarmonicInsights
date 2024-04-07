import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setProjectId  } from '../../redux/slice/projectIdSlice';

export const COLUMNS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: '_id'
  },
  {
    Header: 'Project Title',
    Footer: 'Project Title',
    accessor: 'project_title'
  },
  {
    Header: 'Description',
    Footer: 'Description',
    accessor: 'description'
  },
  {
    Header: 'Problem Statement',
    Footer: 'Problem Statement',
    accessor: 'problem_statement'
  },
  {
    Header: 'Proposed Solution',
    Footer: 'Proposed Solution',
    accessor: 'proposed_solution'
  },
  {
    Header: 'Expected Outcome',
    Footer: 'Expected Outcome',
    accessor: 'expected_outcome'
  },
  {
    Header: 'Analysis',
    Footer: 'Analysis',
    accessor: 'analysis',
    Cell: ({ row }) => {
      const navigate = useNavigate(); 
      const dispatch =useDispatch();
      const id = useSelector((state) => state.projectId.value);

      return (
        <button
          onClick={(event) => {
            event.preventDefault();
            console.log("triggered");
            dispatch(setProjectId (row.original._id));
           
            console.log(id);
            console.log("Analysis triggered for user ID:", row.original._id);
            navigate('/results');
          }}
          className="btn-analyze"
        >
          Analyze
        </button>
      );
    }
  }
];
