import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from  '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders';

const INTGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 1.3,
  cheese: 0.7
};
class BurgerBuilder extends Component {
  // constructor (props){
  //     super(props);
  //     this.state={...}
  // }
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount(){
    console.log(this.pros);
    axios.get('https://tony-react-my-burger.firebaseio.com/ingredients.json')
      .then(response=>{
        this.setState({ingredients: response.data});
      } )
      .catch(error=>{
          this.setState({error:true});
      });


  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INTGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INTGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    console.log("purchaseHandler");
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    console.log("purchaseCancelHandler");
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {

    // //alert("You Continue!");

    // this.setState({loading: true});

    // const order={
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Tony Cheung',
    //     address: {
    //       street : 'test street',
    //       zipCode:'11313',
    //       country:'Hong Kong'
    //     },
    //     email:'test@test.com'
    //   },
    //   deliveryMethod: 'fastest'
    // };
    // axios.post("/ingredient.json",order)
    //   .then(response=> {
    //     this.setState({loading: false, purchase: false});
    //   })
    //   .catch(error=>{
    //     this.setState({loading: false, purchase: false});
    //   });
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary =null;
    let burger =this.state.errror?<p>Ingredients can't be loaded!</p>:<Spinner/>;

    if (this.state.ingredients){
      burger=  (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientDeducted={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Aux>
      );

      orderSummary =(
            <OrderSummary
                  ingredients={this.state.ingredients}
                  price={this.state.totalPrice}
                  purchaseCancelled={this.purchaseCancelHandler}
                  purchaseContinued={this.purchaseContinueHandler}
            />
      );
    }
        
    if (this.state.loading){
      orderSummary = <Spinner/>;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
export default  WithErrorHandler(BurgerBuilder,axios);
