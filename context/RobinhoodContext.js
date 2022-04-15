import { createContext, useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'

export const RobinhoodContext = createContext()

export const RobinhoodProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [formattedAccount, setFormattedAccount] = useState('')

  const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } =
    useMoralis()

  useEffect(() => {
    if (isAuthenticated) {
      console.log("isAuthenticated block running")
      const account = user.get("ethAddress")
      let formatAccount = account.slice(0, 4) + "..." + account.slice(-4);
      setFormattedAccount(formatAccount);
      setCurrentAccount(account);
      console.log(account)
    }
  }, [isAuthenticated, enableWeb3])

  useEffect(() => {
    if (!currentAccount) return
    ;(async () => {
      console.log("!currentAccount block running")
      const response = await fetch('/api/createUser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress: currentAccount,
        }),
      });
      
      const data = await response.json();
      console.log("!currentAccount block end")
    })
  }, [currentAccount]);

  const connectWallet = () => {
    console.log("connectWallet Working")
    authenticate()
  }

  const signOut = () => {
    console.log('Logged out')
    logout()
  }

  return (

    //adding the values within value makes them avalable to run through app.js 
  <RobinhoodContext.Provider 
  value={{
      connectWallet,
      signOut,
      currentAccount,
      isAuthenticated,
      formattedAccount,
  }}>
  {children}
  </RobinhoodContext.Provider>
  )
}
