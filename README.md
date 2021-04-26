<h1 align="center">Cat Card Application (API)</h1>
<hr>

<p align="center">
  <img width="800" src="https://tokeneo.com/uploads/2020/12/cryptokitties.jpeg" alt="Cat Card">
</p>

An API that creates a nice cat card for you with custom text
***

<p align="center">
  :warning: NOTE: <br>
  <i></b>By the time I develop the API, <a href="https://cataas.com" target="_blank">https://cataas.com</a> service is unavailabe and I had to go for an alternative API. As an  alternative, <a href="https://docs.thecatapi.com/" target="_blank">https://docs.thecatapi.com/</a> API is used</b></i>
<p>
<hr>
<br>

### How to run the app locally
1. Clone the repository
2. Navigate to the project folder
3. Run `npm install` to install all the required dependencies
4. Run `npm run start` to start the application

### API endpoints
**Request**
- Path: `/api/cat?text1={YOUR_TEXT1}&text2={YOUR_TEXT2}`  
- Method: `GET`  
- Required parameters:  
  - `text1`: Your first custom text to create the cat 
  - `text2`: Your second custom text to create the cat

**Response**
- API returs the image file with your custom text on it
  - response status: `200`
  - response headers: `{ "Content-Type": "image/png" }`
  - response body contains the image file

**Possible response codes**
- `404`: API endpoint not found (check for the correct API endpoint)
- `200`: Success

### Running unit tests  
Unit tests are written using [Jest](https://jestjs.io/)
1. Run `npm run test` to run the unit tests
