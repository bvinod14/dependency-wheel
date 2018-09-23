const React = require('react');

class IndexPage extends React.Component {

  render(){

    return(
      <html>
        <head>
          <title>{this.props.pageTitle}</title>
          <link href="https://fonts.googleapis.com/css?family=Sunflower:300" rel="stylesheet"/>
          <Styles styles={this.props.styles} />
        </head>
        <body>
          <div id="root"></div>
          <Scripts scripts={this.props.scripts} />
        </body>
      </html>
    )
  }
}


function Scripts(props){
  let scripts = props.scripts.map((item)=>{
    return (
      <script type="text/javascript" src={item}></script>
    )
  });

  return scripts;
}

function Styles(props){
  let styles = props.styles.map((item)=>{
    return (
      <link type="text/css" href={item} rel="stylesheet"/>
    )
  });

  return styles;
}


module.exports = IndexPage;