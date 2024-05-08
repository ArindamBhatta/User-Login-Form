# Server

To run the node server execute the below commands:
```
cd server
npm i
npm start
```

The server runs on `http://localhost:8111`. 
#### The URL syntax:
`http://localhost:8111/api/{api_version}/{service_name}`

### API Version
as of now all the services come under `v1`
### Services (service_name)
- `fetch-alerts`
  ```
      // Example axios request
      const { data } = await axios.get(
        "http://localhost:8111/api/v1/fetch-alerts",
        {
          params: { userId },
        }
      );
  ```
- `fetch-notifications`
  ```
      // Example axios request
      const { data } = await axios.get(
        "http://localhost:8111/api/v1/fetch-notifications",
        {
          params: { userId },
        }
      );
  ```

