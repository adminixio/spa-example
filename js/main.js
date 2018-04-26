import '../css/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { render } from 'react-dom'
import HelloWorld from './components/HelloWorld'
import { Grid, Row, Col } from 'react-bootstrap'

render(
  <Grid>
    <Row className="show-grid">
      <Col xs={2} xsOffset={5}><HelloWorld say="hello world" /></Col>
    </Row>
  </Grid>,
  document.getElementById('root')
);
