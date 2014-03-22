$.ajax({
  url:'https://github.com/dashboard/pulls',
  crossDomain: true,
  data:{
    direction: 'asc',
    page:1,
    sort: 'created',
    state: 'closed'
  }
}).done(function (data) {
    console.log(data);
  });