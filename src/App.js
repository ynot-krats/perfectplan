import React,{Fragment} from 'react';
import './App.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullPage, Slide } from 'react-full-page';
import {Col,Row} from 'antd'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './components/home'
import Middle from "./components/secondpage";
import CoursePage from "./components/course";
import MobileCoursePage from "./mobile/course";
import Media from 'react-media';
import {DetailPage} from "./components/detail";
import CourseDetail from "./components/courseDetail";
import Section from "./components/scrollp";
import MoblieHome from "./mobile/home";
import {MobileDetailPage} from './mobile/detail'
import MobileCourseDetail from "./mobile/courseDetail";
class App extends React.Component {
  render() {
    return (

        <Media queries={{
          small: "(min-width: 220px) and (max-width: 599px)",
          large: "(min-width: 600px) "
        }}>
          {matches => (
            <Fragment>
              {matches.small && <Col>
                  {console.log("device width",matches.small)}
                   <BrowserRouter >

                          <Switch>
                                 <Route exact  path="/">

                                     <Slide><MoblieHome/></Slide>


                                 </Route>
                              <Route exact path="/test" >
                        <Section/>

                    </Route>

                    <Route exact path="/course" >
                        <MobileCoursePage/>

                    </Route>
                    <Route exact path="/course/:courses" >
                        <MobileCourseDetail />
                    </Route>
                             <Route exact path="/:page" >
                        <MobileDetailPage/>
                    </Route>


                          </Switch>

</BrowserRouter>
              </Col>}
                {matches.large &&
                    <Col>
                         <BrowserRouter >

                          <Switch>
                                 <Route exact  path="/">
                                 <FullPage>
                                     <Slide><Home/></Slide>
                                     <Slide><Row><Middle/></Row></Slide>
                                 </FullPage>
                                 </Route>
                              <Route exact path="/test" >
                        <Section/>

                    </Route>

                    <Route exact path="/course" >
                        <CoursePage/>

                    </Route>
                    <Route exact path="/course/:courses" >
                        <CourseDetail />
                    </Route>
                             <Route exact path="/:page" >
                        <DetailPage/>
                    </Route>


                          </Switch>

</BrowserRouter>
                </Col>
                     }
              </Fragment>
          )}
        </Media>
    );
  }
}
export default App;
 
