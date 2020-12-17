// close nav bar on click
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// routing mechanism
const routes = {
    '' : homeHTML,
    '#work': workHTML,
  };
  
  const rootDiv = document.getElementById('main');
  
  rootDiv.innerHTML = routes[window.location.hash];
  console.log(window.location.hash)
  const onNavigate = (hash) => {
    window.history.pushState(
      {},
      hash,
      window.location.origin + hash
    )
    rootDiv.innerHTML = routes[hash]
  }
  
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.hash]
  }