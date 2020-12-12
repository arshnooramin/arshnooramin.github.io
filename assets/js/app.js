  
const routes = {
    '/' : about,
    '/contact' : contact,
  };
  
  const rootDiv = document.getElementById('main');
  rootDiv.innerHTML = routes[window.location.pathname];
  
  const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
  }
  
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }