const get = async() => {
  const response = await fetch('https://github-jobs-api-proxy.herokuapp.com/jobs');
 const jobs = await response.json();
 console.log(jobs);
 searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const location = ev.target.location.value
  const description = ev.target.description.value
  jobs.map( function (x) {
    if (x.location === location) {
      console.log(x)
    }
    if (x.title === description) {
      console.log(x)
    }
  } )
});
}
get();

const searchForm = document.getElementById('search-form');


