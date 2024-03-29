import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Cumstomer';
import './App.css';
import { Paper } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: createSpacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '세종대왕',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '961222',
  'gender': '남자',
  'job': '디자이너'
}]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> );})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
