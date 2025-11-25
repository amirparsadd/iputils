# IPUtils Edge API
This is the api of [IPUtils](https://iputils.ir) written in HonoJS and specifically designed for R1EC.

## How to deploy
1. Setup `r1ec` CLI: `npm i -g r1ec`
2. Login with your machine user key: `r1ec login`
3. Deploy: `npm run deploy`

## How to use
The api is accessible at `https://ip.[ACCOUNTNAME].arvanedge.ir/`. Making a request to it returns something like this:
```json
{
  "ip":"2.3.4.5",
  "countrycode":"IR",
  "_ddata": {
    "rq":1
  }
}
```

## Contribution
All contributions are appreciated. Just make a PR/Issue!

## License
MIT