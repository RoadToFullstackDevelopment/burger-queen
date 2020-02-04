import React from 'react';
import axios from 'axios';
import MenuButtonGroup from './MenuButtonGroup';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import OrderPage from './OrderPage';
import Modal from './Modal/index';

const ModalContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
`;

const Menu = () => {
    let history = useHistory();

    const [products, setProducts] = React.useState([]);

    const productLink = 'https://burger-queen-restapi.herokuapp.com/api/products';

    React.useEffect(() => {
        axios.get(productLink).then((res) => {
            setProducts(res.data);
        })
    })

    const [state, setState] = React.useState({
        input: '',
        names: ["VER TUDO", "CAFÉ DA MANHÃ", "RESTO DO DIA"],
        values: ["", "breakfast", "rest-of-the-day"],
        categories: [],
        showModal: false,
        orderItems: []
    })

    const handleClick = e => {
        setState({ ...state, input: e.target.value });
    };

    const { names, values, input } = state;
    const filtered = products.filter(item => item.kindOfProduct.includes(state.input));

    const closeModal = () => {
        setState({ ...state, showModal: false });
      };
    
    const openModal = () => {
        setState({ ...state, showModal: true });
    };


    return(
        <main>
            <div><h1>Salão</h1></div> 
            <div id="myContainer">
                <div>
                    <button className="btn" onClick={() => {history.push("/salon")}}>VOLTAR PARA A TELA PRINCIPAL
                    </button>
                </div>
                <div>
                    <MenuButtonGroup
                        names={names}
                        values={values}
                        handleClick={handleClick}
                        myStyle={input}
                    />
                </div>
                {filtered.map(e => {
                    return (
                    <div>
                        <figure className="snip1171">
                            <img src={e.productImage} alt={e.kindOfProduct}/>
                            <div className="price">R$ {e.price.toFixed(2)}</div>
                            <figcaption>
                                <h3>{e.name}</h3>
                                <p>
                                Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit.
                                </p>
                            </figcaption>
                            <div>
                                <Modal show={state.showModal} onClose={closeModal}>
                                <ModalContent>
                                    <OrderPage />
                                </ModalContent>
                                </Modal>
                                <button type="submit" rel="button" onClick={openModal}>
                                open
                                </button>
                            </div> 
                        </figure>
                    </div>
                    );
                })}
            </div>
        </main>
    )
}



export default Menu;

