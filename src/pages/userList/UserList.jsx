import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { AddRounded, DeleteOutline } from "@material-ui/icons";
import { Paper } from "@material-ui/core";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userListWrapper">
        <div className="userListBtnContainer">
          <Link to="/newUser" className="link">
            <button className="userAddButton">
              Create user <AddRounded />{" "}
            </button>
          </Link>
        </div>
        <Paper className="userListCon">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={6}
            checkboxSelection
            className="userListTable"
          />
        </Paper>
      </div>
    </div>
  );
}
