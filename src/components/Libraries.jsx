/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { Container, Grid, Typography, Input } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import { useStyles } from '../styles/useStyles';
import { useMovieProvider } from '../store/MovieProvider';
import { useAPI } from '../api/api';

const columns = [
  { title: 'NAME', field: 'name', type: 'string', align: 'left' },
  { title: 'USER', field: 'username', type: 'string', align: 'left' },
  { title: 'COUNT', field: 'count', type: 'numeric', align: 'center' },
];
export const Libraries = (children) => {
  const classes = useStyles();
  const history = useHistory();
  const api = useAPI();
  const { allLibraries, setAllLibraries, getAllLibraries } = useMovieProvider();
  // const [data, setData] = useState(children.libraries);
  const tableHeight = '82vh';

  const handleRowClick = (rowData) => {
    history.push(`/library/${rowData.libraryId}`);
  };

  const handleAdd = async (library) => {
    const status = await api.post('/library', library);
    getAllLibraries();
  };

  const handleUpdate = async (libraryId, name) => {
    const status = await api.patch(`/library/${libraryId}/${name}`);
    // {{url}}/library/1?name=qflcksterrrr
    getAllLibraries();
  };

  return (
    <>
      <Container className={classes.libraryContainer}>
        <Grid container alignItems="center" direction="column">
          <Grid item xs={12}>
            <Typography variant="caption">{children.currentList}</Typography>
          </Grid>
        </Grid>

        <MaterialTable
          columns={[
            {
              title: 'Name',
              field: 'name',
              editComponent: (editProps) => <Input autoFocus onChange={(e) => editProps.onChange(e.target.value)} />,
            },
            { title: 'USER', field: 'username', type: 'string' },
            { title: 'COUNT', field: 'count', type: 'numeric' },
          ]}
          data={allLibraries}
          title="AutoFocus Demo"
          icons={{
            Add: (props) => <AddIcon />,
            Edit: (props) => <EditIcon />,
            Delete: (props) => <DeleteIcon />,
            Clear: (props) => <DeleteIcon />,
            Check: (props) => <CheckIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />,
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  // setAllLibraries([...allLibraries, newData]);
                  handleAdd(newData);
                  // getAllLibraries();
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...allLibraries];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  // setAllLibraries([...dataUpdate]);
                  // handleUpdate()
                  // console.log(`library Id=${newData.libraryId}`);
                  // console.log(`new name=${newData.name}`);
                  handleUpdate(newData.libraryId, newData.name);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...allLibraries];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setAllLibraries([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />

        {/* <MaterialTable
          onRowClick={(event, rowData) => {
            handleRowClick(rowData);
          }}
          options={{
            filtering: false,
            showTitle: false,
            paging: false,
            sorting: true,
            maxBodyHeight: tableHeight,
            actionsColumnIndex: -1,
            search: false,
            searchFieldAlignment: 'left',
            searchAutoFocus: true,
            searchFieldVariant: 'outlined',
            toolbar: false,
          }}
          columns={columns}
          editable={false}
          data={children.libraries}
        /> */}
      </Container>
    </>
  );
};
