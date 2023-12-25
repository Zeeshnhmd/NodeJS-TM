const url = require('url');

const myUrl = new URL(
	'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

//* Serialized URL
console.log(myUrl.href);
console.log(myUrl.href.toString());

//* Host (root domain) this will give us PORT "mywebsite.com:8000"
console.log(myUrl.host);

//* Host (root domain) this will not give us PORT "mywebsite.com"
console.log(myUrl.hostname);

//* Pathname
console.log(myUrl.pathname);

//* Serialized query
console.log(myUrl.search);

//* Parmas object
console.log(myUrl.searchParams);

//* Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//* Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
