
 //imported elements
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//function for the form 

function MyForm() {
    const [amountInput, setAmountInput] = useState();
    const [termInput, setTermInput] = useState();
    const [ totalCostState, setTotalCostState ] = useState()
    const [ monthlyCostState, setMonthlyCostState ] = useState()
    
    
    const handleSubmit = (event) => {
      event.preventDefault();
        let interestRate =20
        let totalInterest = ((amountInput/100)*interestRate )
        let totalCost =  (parseFloat(amountInput) + totalInterest);
        let monthlyCost = totalCost / termInput;

    setTotalCostState(totalCost)
    setMonthlyCostState(monthlyCost)

    console.log("totalCost", totalCost);
    console.log("monthlyCost", monthlyCost);
    console.log("termInput", termInput);
    console.log("amountInput", amountInput);

  
  };
   
  //HTML for the form
    return (
<div className='paymentBox'> 
  <div className="paymentHeader">
    <h5 >Payment Options</h5>
      <p>We offer an affordable range of payment options. Please enter your total payment amount and the total number of months you wish to spread payments</p>
        </div>
          <div className="row">
            
            <div className="col-lg-5 col-md-4">
            
              <form className="paymentText" onSubmit={handleSubmit}>
                <label for="tamount"> Amount:
                  <input className='inputBox' type="text" id="tamount" name="username" onChange={(e) => setAmountInput((prevItem) => e.target.value)}/>
                </label>
                <label> Months:
                  <input  className='inputBox' type="number" id="period" name="period" onChange={(e) => setTermInput((prevItem) => e.target.value)} placeholder="Number of months" />
                </label>
                  <input type="submit" />
              </form>
            </div>
        <p className="outPut">Monthly Payments: £{monthlyCostState}</p>
        <p className="outPut">Total: £{totalCostState}</p>
        <p></p>

  </div>
</div>
    );
}
  
  export default MyForm;
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<MyForm />);
