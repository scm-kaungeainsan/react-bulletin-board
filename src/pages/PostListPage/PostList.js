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
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { toLower, remove } from 'lodash';

import PostService from "../../services/post.service";
import Loading from "../../components/showInfoTemp/loading";
import MessageDialog from "../../components/showInfoTemp/Dialog";
import { DetailBox } from "../../components/showInfoTemp/alertMessage";
import { useHistory } from 'react-router-dom';

import { useStyles } from './components/customPostListCss/customPostListCss';
import styles from './PostList.module.css';
import { getTime } from "date-fns";
import { infoMessages, errMessages } from '../../constants/Messages';


export default function PostList() {
  const classes = useStyles();
  const searchKeyRef = React.createRef();
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [orginPosts, setOrginPosts] = useState([]);
  const [callLod, setCallLod] = React.useState(true);
  const [showDetail, setShowDetail] = React.useState(false);
  const [delDialog, setDelDialog] = React.useState(false);
  const [postID, setPostID] = React.useState(0);
  const [pagiKeys, setPagiKeys] = React.useState({ pageNo: 1, pageSize: 50 });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    PostsGet()
  }, [])

  const PostsGet = () => {
    PostService.getAll()
      .then(response => {
        const data = user.type === '0' ? response.data : response.data.filter(posts => posts.createdUserId === user.id);
        setPosts(data);
        setOrginPosts(data);
        setCallLod(false);
        console.log(data)
      })
      .catch(e => {
        console.log('error', e);
        setCallLod(false);
      });
  }

  const handlePaginator = (event, pageNo) => {
    console.log('handlePaginator', pageNo);
    setPagiKeys({ pageNo, pageSize: pagiKeys.pageSize });
  }

  const deletePost = id => {
    remove(posts, {
      id
    });
    remove(orginPosts, {
      id
    });
    console.log('results', id, posts, orginPosts);
    intialPagiKeys();
    closeDialog();
  }

  const intialPagiKeys = () => {
    setPagiKeys({ pageNo: 1, pageSize: 50});
  }

  const handleSearch = () => {
    let searchKey = searchKeyRef.current.value;
    console.log('searchKey', searchKey);
    if (posts.length === 0) {
      return;
    }
    if (!searchKey) {
      setPosts(orginPosts);
      return;
    }
    searchKey = toLower(searchKey);
    const results = posts.filter((item) => toLower(item.title).includes(searchKey)
      || toLower(item.comment).includes(searchKey)
      || toLower(item.createdUser).includes(searchKey));
    setPosts(results);
    intialPagiKeys();
  };

  const handleUploadCsv = () => history.push("/upload-csv");

  const handleDownloadCsv = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws = XLSX.utils.json_to_sheet(orginPosts);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['post-data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, 'Posts' + new Date().getTime() + fileExtension);
  };

  const showPostDetail = (data) => {
    console.log('data', data);
    setShowDetail(true);
    setPostID(data.id);
  };

  const openDelDialog = (id) => {
    setDelDialog(true);
    setPostID(id);
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
                  Post List
                </Typography>
              </Box>
              <Box >
                <TextField label="Search" inputRef={searchKeyRef}
                  className={styles.searchInput} fullWidth size="small" variant="outlined" />
                <Button variant="contained" onClick={handleSearch} color="primary" className={styles.searchItem}>
                  Search
                </Button>
                <Button variant="contained" onClick={() => history.push("/post-create")} color="primary" className={styles.searchItem}>
                  Add
                </Button>
                <Button variant="contained" onClick={handleUploadCsv} color="primary" className={styles.searchItem}>
                  Upload
                </Button>
                <Button variant="contained" onClick={handleDownloadCsv} color="primary" className={styles.searchItem}>
                  Download
                </Button>
              </Box>
            </Box>
          </Paper>
          {/* table */}
          <TableContainer component={Paper}>
            {posts.length > 0 ?
              <Table id="excel-table" className={classes.table} aria-label="simple table">
                {/* header */}
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <Typography variant="h6">Post Title</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h6">Post Description</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h6">Posted User</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Posted Date</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h6">Action</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                {/* body */}
                <TableBody>
                  {
                    (posts.slice(
                      (pagiKeys.pageNo - 1) * pagiKeys.pageSize,
                      (pagiKeys.pageNo - 1) * pagiKeys.pageSize + pagiKeys.pageSize
                    )
                    ).map((post) => (
                      <TableRow key={post.id}>
                        <TableCell align="left">

                          <Link component="button"
                            variant="body2"
                            onClick={() => {
                              showPostDetail(post);
                            }}>
                            {post.title && post.title.length > 15 ? post.title.substring(0, 15) + "..." : post.title}
                          </Link>
                        </TableCell>
                        <TableCell align="left"> {post.comment && post.comment.length > 15 ? post.comment.substring(0, 15) + "..." : post.comment}</TableCell>
                        <TableCell align="left">{post.createdUser}</TableCell>
                        <TableCell align="center">{new Date(post.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button onClick={() => history.push(`/post-update/${post.id}`)}>Edit</Button>
                            <Button color="secondary" onClick={() => openDelDialog(post.id)} >Del</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table> : <div color='error' className={styles.nodata}>{infoMessages.noDataInfo}</div>}
          </TableContainer>
          <br />
          <Box >
            <Pagination
              page={pagiKeys.pageNo}
              count={Math.ceil(posts.length / pagiKeys.pageSize)}
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
      {showDetail && <DetailBox from={'Post'} data={posts.find((value) => value.id === postID)} open={showDetail} close={closeDetail} />}
      {delDialog && <MessageDialog open={delDialog} close={closeDialog} id={postID} deletePost={deletePost} />}
    </div>
  );
}