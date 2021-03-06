import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import grad from '../files/wp.jpg'


export default function Cart() {
    const { getCart, cart, changeProductCount, deleteFromCart } =
        useContext(cartContext);
    useEffect(() => {
        getCart();
    }, []);
    const navigate = useNavigate();
    // console.log(cart);
    return (
        <Box>
            <img width="100%" className='img' src={grad} alt='' />
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Тур:</TableCell>
                                <TableCell align="right">Цена билета:</TableCell>
                                <TableCell align="right">Число билетов:</TableCell>
                                <TableCell align="right">Oбщая цена:</TableCell>
                                <TableCell align="right">Узнать больше:</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart &&
                                cart?.products.map(row => (
                                    <TableRow
                                        key={row.item.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {row.item.title}
                                        </TableCell>
                                        <TableCell align="right"><img style={{ marginRight: "8px" }} width={"30px"} src="https://cdn-icons-png.flaticon.com/128/3037/3037156.png" alt="" />{row.item.price}</TableCell>
                                        <TableCell align="right" >
                                            <IconButton
                                                onClick={() =>
                                                    changeProductCount(row.count - 1, row.item.id)
                                                }
                                                aria-label="delete">
                                                <RemoveIcon />
                                            </IconButton>
                                            <img style={{ marginRight: "8px" }} width={"30px"} src="https://cdn-icons.flaticon.com/png/512/2918/premium/2918704.png?token=exp=1657016046~hmac=5a8e0f09fd58a196a793721f3c6be9a4" alt="" />
                                            {row.count}
                                            <IconButton
                                                onClick={() =>
                                                    changeProductCount(row.count + 1, row.item.id)
                                                }
                                                aria-label="delete">
                                                <AddIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="right">
                                            <img style={{ marginRight: "8px" }} width={"30px"} src="https://cdn-icons-png.flaticon.com/512/3004/3004151.png" alt="" />
                                            {row.subPrice}</TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                onClick={() => deleteFromCart(row.item.id)}
                                                aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => navigate(`/products/${row.item.id}`)}
                                                aria-label="delete">
                                                <InfoIcon  />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        margin: "30px 20px",
                    }}>
                    <Typography variant="h4" component="h2">
                        Total: {cart && cart?.totalPrice}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}