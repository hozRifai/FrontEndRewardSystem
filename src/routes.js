import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import AddGoal from "./components/AddGoal";
import FillaSurvey from "./components/FillSurvey";
import MakeTransaction from "./components/MakeTransaction";
import LoginCheck from "./components/LoginCheck";
import ShareRewards from "./components/ShareRewards";
import Login from "./components/Login";
import Layout from "./containers/Layout";
import RewardsLevelOne from "./components/RewardsLevelOne";
import RewardsLevelTwo from "./components/RewardsLevelTwo";
import RewardsHistory from "./components/RewardsHistory";
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/dashboard/" component={Dashboard} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/addGoal/" component={AddGoal} />
    <Route exact path="/fillasurvey/" component={FillaSurvey} />
    <Route exact path="/makeTransaction/" component={MakeTransaction} />
    <Route exact path="/dailyLogin/" component={LoginCheck} />
    <Route exact path="/shareRewards/" component={ShareRewards} />
    <Route exact path="/rewardslevelone/" component={RewardsLevelOne} />
    <Route exact path="/rewardsleveltwo/" component={RewardsLevelTwo} />
    <Route exact path="/rewardshistory/" component={RewardsHistory} />
  </div>
);

export default BaseRouter;
