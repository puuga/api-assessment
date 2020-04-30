# api-assessment

## Working 😎

`npm i` and `npm run dev` for development

`npm ci` and `npm start` for production run

May the force see with you

## Docker command

`docker build -t puuga/api-assessment:latest .`

```sh
docker run
    -e ENV="dev"
    -r PORT=3000
    --name api-assessment-dev
    puuga/api-assessment:latest
```
