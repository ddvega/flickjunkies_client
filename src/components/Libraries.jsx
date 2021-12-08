/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { Container, Grid, Typography, Input } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStyles } from '../styles/useStyles';

export const Libraries = (children) => {
  const classes = useStyles();
  const history = useHistory();
  const tableHeight = '82vh';

  const handleRowClick = (rowData) => {
    history.push(`/library/${rowData.libraryId}`);
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
          columns={[
            { title: 'NAME', field: 'name', type: 'string', align: 'left' },
            { title: 'USER', field: 'username', type: 'string', align: 'left' },
            { title: 'COUNT', field: 'count', type: 'numeric', align: 'center' },
          ]}
          editable={false}
          data={children.libraries}
        />
      </Container>
    </>
  );
};
