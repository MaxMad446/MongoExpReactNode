import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import {LimksPages} from "./pages/LimksPages";
import {DetailPages} from "./pages/DetailPages";
import {CreatePages} from "./pages/CreatePages";
import {AuthPages} from "./pages/AuthPages";

export const useRoutes = isAuthenticated =>{
  if (isAuthenticated){
    return(
    <Switch>
      <Route path= "/limks" exact>
        <LimksPages />
      </Route>
      <Route path= "/create" exact>
        <CreatePages />
      </Route>
      <Route path= "/detail/: id" >
        <DetailPages />
      </Route>
      <Redirect to="/create" />
    </Switch>
    )
  }
  return (
      <Switch>
        <Route path="/" exact>
          <AuthPages/>
        </Route>
        <Redirect to ="/" />
      </Switch>
  )
}