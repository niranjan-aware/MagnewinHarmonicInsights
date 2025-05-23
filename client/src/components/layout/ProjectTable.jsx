import React, { useEffect, useState, useMemo, Fragment } from "react";
import axios from "axios";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import './projecttable.css'

export default function ProjectTable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  // console.log(userId);


console.log(userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/data/fetchCalculationData",
          {
            params: {
              page: 1,
              limit: 10,
              search: "",
              user_id: userId || "",
            },
          }
        );

        setProjects(response.data.projects);
        // console.log(response.data.projects);
        // console.log(userId);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data=useMemo(()=>projects,[projects])

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table className="pagination-table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            {footerGroups.map((footerGroup, index) => (
              <tr key={index} {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td
                    key={column.getFooterProps().key}
                    {...column.getFooterProps()}
                  >
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        {/* <div className="pagination-controls">
        <span className="page-num">
          Page{""}
          <strong>
            {pageIndex + 1}
            of {pageOptions.length}{" "}
          </strong>
        </span>

        <select
          className="pageNum-dropdown"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

        <span className="span-goto">
          Go to page:{" "}
          <input
            type="number"
            value={pageIndex + 1}
            onChange={(e) => {
              const inputPage = e.target.value
                ? parseInt(e.target.value, 10)
                : 1;
              const newPage = Math.min(Math.max(1, inputPage), pageCount);
              gotoPage(newPage - 1);
            }}
            style={{ width: "50px" }}
            disabled={!canPreviousPage && pageIndex === -1}
          />
        </span>

        <button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
        >
          {">>"}
        </button>
      </div> */}
    </div>
  );
}
