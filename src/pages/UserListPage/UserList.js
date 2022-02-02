import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Box,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  TableBody,
  TableCell,
  Typography,
  TextField
} from '@material-ui/core';
import { Pagination, PaginationItem, Link } from '@mui/material';
import { toLower, remove } from 'lodash';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useHistory } from 'react-router-dom';

import Loading from "../../components/showInfoTemp/loading";
import MessageDialog from "../../components/showInfoTemp/Dialog";
import { DetailBox } from "../../components/showInfoTemp/alertMessage";


import { useStyles } from './components/customUserListCss/customUserListCss';
import styles from './UserList.module.css';


import UserService from "../../services/user.service";
import { infoMessages, errMessages } from '../../constants/Messages';



export default function UserList() {
  const classes = useStyles();
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [searchKeys, setSearchKeys] = React.useState({ name: '', email: '', from: null, to: null });
  const [orginUsers, setOrginUsers] = useState([]);
  const [callLod, setCallLod] = React.useState(true);
  const [showDetail, setShowDetail] = React.useState(false);
  const [delDialog, setDelDialog] = React.useState(false);
  const [userID, setUserID] = React.useState(0);
  const [pagiKeys, setPagiKeys] = React.useState({ pageNo: 1, pageSize: 50 });

  useEffect(() => {
    UsersGet()
  }, [])

  const UsersGet = () => {
    setCallLod(true);
    UserService.getAll()
      .then(response => {
        setUsers(response.data);
        setOrginUsers(response.data);
        console.log(response.data)
        setCallLod(false);
      })
      .catch(e => {
        setCallLod(false);
        console.log('error', e);
      });
  }

  const UpdateUser = id => {
    window.location = '/update/' + id
  }

  const UserDelete = id => {

  }

  const deleteUser = id => {
    console.log('id', id);

    remove(users, {
      id
    });

    remove(orginUsers, {
      id
    });

    console.log('results', id, users, orginUsers);
    intialPagiKeys();
    closeDialog();
  }

  const intialPagiKeys = () => {
    setPagiKeys({ pageNo: 1, pageSize: 50 });
  }

  const showUserDetail = (data) => {
    console.log('data', data);
    setShowDetail(true);
    setUserID(data.id);
  };

  const handlePaginator = (event, pageNo) => {
    console.log('handlePaginator', pageNo);
    setPagiKeys({ pageNo, pageSize: pagiKeys.pageSize });
  }

  const handleInputChange = (value, from) => {
    let to = null;
    if (from === 'to' && value) {
      to = new Date(value);
      to.setSeconds(59, 999);
      to.toISOString();
    }
    setSearchKeys({ ...searchKeys, [from]: toLower(value) })
  }

  const handleSearch = async () => {
    console.log('handleSearch', searchKeys)
    if (users.length === 0) {
      return;
    }
    if (searchKeys.name === '' && searchKeys.email === '' && searchKeys.from === null && searchKeys.to === null) {
      setUsers(orginUsers);
      return;
    }

    let results = users;
    if (searchKeys.name !== '') {
      results = getSearchData(results, searchKeys.name, 'name');
    }
    if (searchKeys.email !== '') {
      results = getSearchData(results, searchKeys.email, 'email');
    }
    if (searchKeys.from) {
      results = getSearchData(results, searchKeys.from, 'from');
    }

    if (searchKeys.to) {
      results = getSearchData(results, searchKeys.to, 'to');
    }
    await Promise.all(results);
    setUsers(results);
    intialPagiKeys();
  };


  const getSearchData = (list, filterKey, key) => {
    let results = [];

    results = list.filter((item) => {
      switch (key) {
        case 'name':
          return toLower(item.name).includes(filterKey);
        case 'email':
          return toLower(item.email).includes(filterKey);
        case 'from':
          return filterKey <= item.created_at;
        case 'to':
          return filterKey >= item.created_at;
        default:
          return false;
      }
    })

    return results;
  }

  const openDelDialog = (id) => {
    setDelDialog(true);
    setUserID(id);
  }

  const closeDialog = () => setDelDialog(false);

  const closeDetail = () => setShowDetail(false);

  return (

    <div className={classes.root}>

      <Container className={classes.container} maxWidth="lg">
        {/* search */}
        <Paper className={classes.paper}>
          <Paper className={classes.paper}>
            <Box >
              <Box flexGrow={1}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  User List
                </Typography>
              </Box>
              <Box >
                <TextField value={searchKeys.name}
                  type='text'
                  onChange={(event) => handleInputChange(event.target.value, 'name')} label="Name" className={styles.searchInput} fullWidth size="small" variant="outlined" />
                <TextField value={searchKeys.email}
                  type='email'
                  onChange={(event) => handleInputChange(event.target.value, 'email')} label="Email" className={styles.searchInput} fullWidth size="small" variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth size="small" variant="outlined">
                  <DatePicker
                    value={searchKeys.from}
                    maxDate={new Date(searchKeys.to)}
                    onChange={(value) => handleInputChange(value ? value.toISOString() : value, 'from')}
                    label="Created From"
                    renderInput={(params) => <TextField {...params} className={styles.searchInput} size="small" variant="outlined" />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth size="small" variant="outlined" >
                  <DatePicker
                    value={searchKeys.to}
                    minDate={new Date(searchKeys.from)}

                    onChange={(value) => handleInputChange(value ? value.toISOString() : value, 'to')}
                    label="Created To"
                    renderInput={(params) => <TextField {...params} className={styles.searchInput} size="small" variant="outlined" />}
                  />
                </LocalizationProvider>

                <Button onClick={handleSearch} variant="contained" color="primary" className={styles.searchItem}>
                  Search
                </Button>
                <Button onClick={() => history.push("/user-create")} variant="contained" color="primary" className={styles.searchItem}>
                  Add
                </Button>
              </Box>
            </Box>
          </Paper>
          {/* table */}
          <TableContainer component={Paper}>
            {users.length > 0 ?
              <Table className={classes.table} aria-label="simple table">
                {/* header */}
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="left">Created User</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Birth Date</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Created Date</TableCell>
                    <TableCell align="center">Updated Date</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                {/* body */}
                <TableBody>
                  {
                    (users.slice(
                      (pagiKeys.pageNo - 1) * pagiKeys.pageSize,
                      (pagiKeys.pageNo - 1) * pagiKeys.pageSize + pagiKeys.pageSize
                    )).map((user) => (
                      <TableRow key={user.id}>

                        <TableCell align="center">
                          <Link component="button"
                            variant="body2"
                            onClick={() => {
                              showUserDetail(user);
                            }}>
                            {user.name}
                          </Link>
                          </TableCell>
                        <TableCell align="center">{user.email && user.email.length > 10 ? user.email.substring(0, 10) + "..." : user.email}</TableCell>
                        <TableCell align="left">{user.created_user && user.created_user.length > 10 ? user.created_user.substring(0, 10) + "..." : user.created_user}</TableCell>
                        <TableCell align="center">{user.phone && user.phone.length > 10 ? user.phone.substring(0, 10) + "..." : user.phone}</TableCell>
                        <TableCell align="center">{new Date(user.date_of_birth).toLocaleDateString()}</TableCell>
                        <TableCell align="center">{user.address && user.address.length > 10 ? user.address.substring(0, 10) + "..." : user.address}</TableCell>
                        <TableCell align="left">{new Date(user.created_at).toLocaleDateString()}</TableCell>
                        <TableCell align="center">{new Date(user.updated_at).toLocaleDateString()}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button color="secondary" onClick={() => openDelDialog(user.id)}>Del</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table> : <div className={styles.nodata}>{infoMessages.noDataInfo}</div>}
          </TableContainer>
          <br />
          <Box >
            <Pagination
              page={pagiKeys.pageNo}
              count={Math.ceil(users.length / pagiKeys.pageSize)}
              variant="outlined"
              shape="rounded"
              color="primary"
              showFirstButton
              showLastButton
              boundaryCount={2}
              onChange={handlePaginator}
              renderItem={(item) => (
                <PaginationItem
                  type={"start-ellipsis"}
                  selected
                  {...item}
                />
              )}
            />
          </Box >
        </Paper>
      </Container>
      {callLod && <Loading open={callLod} />}
      {showDetail && <DetailBox from={'User'} data={users.find((value) => value.id === userID)} open={showDetail} close={closeDetail} />}
      {delDialog && <MessageDialog open={delDialog} close={closeDialog} id={userID} deletePost={deleteUser} />}
    </div>

  );
}