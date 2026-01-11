import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Checkout = ({ data, setData, next, back }) => {
  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setData({...data, name: val});
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setData({...data, phone: val});
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-black italic">Sender Details</h2>
      
      <InputField 
        label="Full Name" 
        placeholder="Enter letters only" 
        value={data.name} 
        onChange={handleNameChange}
      />

      <InputField 
        label="Mobile Number" 
        placeholder="10-digit number" 
        value={data.phone} 
        onChange={handlePhoneChange}
        error={data.phone && data.phone.length < 10 ? "Incomplete number" : ""}
      />

      <div className="pt-4 space-y-3">
        <Button onClick={next} disabled={!data.name || data.phone.length !== 10}>
          Proceed to Success
        </Button>
        <Button variant="secondary" onClick={back}>Review Order</Button>
      </div>
    </div>
  );
};

export default Checkout;