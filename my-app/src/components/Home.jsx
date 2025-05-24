import React, { useEffect ,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'


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
    let navigate=useNavigate()
    //function to call backend API for deletion
    let deleteUser=(id)=>{
      axios.delete('http://localhost:4000/userremoval/'+id).then((res)=>{
        window.location.reload();//to reload the current page
      }).catch((error)=>{
        console.log(error)
      })
    }
    //function to call backend API for updation
    let updateUser=(user)=>{
      console.log("hi")
      navigate('/add',{state:{user}})
    }
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
              <TableCell align="right"><Button variant="contained" onClick={()=>{
                updateUser(row)
              }} color="success">
             Edit
              </Button></TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=>{
                  deleteUser(row._id)
                }} coloimport React, { useEffect ,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'


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
    let navigate=useNavigate()
    //function to call backend API for deletion
    let deleteUser=(id)=>{
      axios.delete('http://localhost:4000/userremoval/'+id).then((res)=>{
        window.location.reload();//to reload the current page
      }).catch((error)=>{
        console.log(error)
      })
    }
    //function to call backend API for updation
    let updateUser=(user)=>{
      console.log("hi")
      navigate('/add',{state:{user}})
    }
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
              <TableCell align="right"><Button variant="contained" onClick={()=>{
                updateUser(row)
              }} color="success">
             Edit
              </Button></TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=>{
                  deleteUser(row._id)
                }} color="error">
             Delete
          </Button></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Homer="error">
             Delete
          </Button></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home
