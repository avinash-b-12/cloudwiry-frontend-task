import React from "react"
// import './app.css'
import Logo from './components/logo/Logo'
import Content from './components/content/Content'
import Options from './components/options/Options'
import {styles} from './appStyle'

const useStyles = styles

function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Logo />
      <Content />
      <Options />
    </div>
  );
}

export default App;
