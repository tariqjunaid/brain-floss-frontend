export const loginUser = (username, password) => {
   return (dispatch) => {
      dispatch(authenticatingUser())
      fetch('http://localhost:3000/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify({
            user: {
               username: username,
               password: password
            }
         })
      })
         .then(response => {
            if (response.ok) {
               return response.json()
            } else {
               throw response
            }
         })
         .then(({ user, jwt }) => {
            localStorage.setItem('jwt', jwt)
            dispatch(setCurrentUser(user))
         })
         .catch(r => r.json().then(e => dispatch(failedLogin(e.message))))
   }
}

export const fetchCurrentUser = () => {
   return (dispatch) => {
      dispatch(authenticatingUser())
      fetch('http://localhost:3000/profile', {
         method: 'GET',
         headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
         }
      })
         .then(response => response.json())
         .then(({ user }) => dispatch(setCurrentUser(user)))
   }
}

export const setCurrentUser = (userData) => ({
   type: 'SET_CURRENT_USER',
   payload: userData
})

export const failedLogin = (errorMsg) => ({
   type: 'FAILED_LOGIN',
   payload: errorMsg
})

export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
