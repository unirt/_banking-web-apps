import { Button, Text, TextField } from '@aws-amplify/ui-react';
import { calculateMortgage } from '@banking-web-apps/mortgage-lib';
import { useState } from 'react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculate = () => {
    const payment = calculateMortgage({
      homePrice,
      downPayment,
      interestRate,
      loanTerm,
      currency,
    });
    setMonthlyPayment(payment);
  };

  return (
    <div>
      <TextField
        label="Home price"
        type="number"
        value={homePrice}
        onChange={(e) => setHomePrice(e.target.value)}
      />
      <TextField
        label="Down payment"
        type="number"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
      />
      <TextField
        label="Interest rate"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <TextField
        label="Loan term (years)"
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      <Button onClick={calculate}>Calculate</Button>
      {monthlyPayment && <Text>Monthly payment: ${monthlyPayment}</Text>}
    </div>
  );
};

export default MortgageCalculator;
