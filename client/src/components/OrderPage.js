import React from 'react';
import axios from 'axios';
import Menu from './Menu';
import styled from 'styled-components';

const OrderPage = (props) => {
    const [waiterName, setWaiterName] = React.useState([]);
    const [clientName, setClientName] = React.useState([]);
    return (
        <form>
            <h1>Pedidos</h1>
            <div>
                <div><input type="text" placeholder="NOME DO(A)CLIENTE"/></div>
                <div><input type="text" placeholder="NOME DO(A)ATENDENTE"/></div>
            </div>
            <div>
            <div>
                <OrderColumn>
                    <h3>Produto</h3>
                    <h3>Preço</h3>
                    <h3>Quantidade</h3>
                </OrderColumn>
            </div>
            <OrderColumn>
                <div className="cart-item cart-column">
                    <img class={props.item.productImage} src="" />
                    <span class="cart-item-title">{props.item.name}</span>
                </div>
                <div class="cart-price cart-column">{props.item.price}</div>
                <div class="cart-quantity cart-column">
                    <select name="" id="">
                        <option value="">1</option>
                    </select>
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>  
            </OrderColumn>
            </div>
            <div>
                <OrderColumn>
                    <h3>Complemento para hambúrguer</h3>
                    <h3>Preço</h3>
                </OrderColumn>
                <OrderColumn>
                    <div>
                    <input type="checkbox" name="" id=""/> complemento
                    </div>
                    <p>preço</p>
                </OrderColumn>
            </div>
            <h3>Total: </h3>
            <button type="submit">Enviar para a cozinha</button>
        </form>
    )
}

const OrderColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-right: 1.5em;
    padding-bottom: 10px;
    margin-top: 10px;
`;

export default OrderPage