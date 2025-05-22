import React, { useEffect ,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const Home = () => {
    const [users,setUsers]=useState([]);
    // const users=[
    //     {
    //         userid:"E105",
    //         name:"Asha",
    //         email:"asha@gmail.com"
    //     },
    //     {
    //         userid:"E106",
    //         name:"Arya",
    //         email:"arya@gmail.com"
    //     },
    //     {
    //         userid:"E107",
    //         name:"Anu",
    //         email:"anu@gmail.com"
    //     }
    //]
    useEffect(()=>{
        axios.get('http://localhost:4000/users').then((res)=>{
                setUsers(res.data);
        })
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home