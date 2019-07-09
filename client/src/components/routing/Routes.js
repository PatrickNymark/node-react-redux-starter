import React from 'react'
import { Login } from '../auth/Login';
import Register from '../auth/Register';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>

  )
}

export default Routes;