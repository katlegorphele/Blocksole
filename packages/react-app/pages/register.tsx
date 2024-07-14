import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { createUser } from "@/services/createUser"; 
import { useAccount } from "wagmi";

const RegisterForm: React.FC = () => {
  const { address: walletAddress } = useAccount();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const { address: _signerAddress } = useAccount();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!walletAddress) {
      alert("Wallet address is not connected");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await addDoc(collection(db, "User"), {
        walletAddress,
        password,
      });

      const blockchainSuccess = await createUser(walletAddress, { _address: walletAddress });

      if (blockchainSuccess) {
        alert("User registered successfully on both Firebase and Blockchain!");
      } else {
        alert("User registered on Firebase, but failed on Blockchain.");
      }
      // alert("User registered successfully!");
      // setWalletAddress('');
      setPassword('');
      setConfirmPassword('');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error registering user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Wallet Address</label>
            <input 
              type="text"
              value={walletAddress}
              // onChange={(e) => setWalletAddress(e.target.value)}
              readOnly
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200" 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200" 
            />
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm text-gray-600">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a></span>
            </label>
          </div>
          <button type="submit" className="w-full bg-gray-500 text-white py-2 rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

