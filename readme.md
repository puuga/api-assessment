# api-assessment

## Working 😎

`npm run dev` for development

`npm start` for production run

## Docker command

`docker build -t puuga/api-assessment:latest .`

```sh
docker run
    -e ENV="dev"
    -r PORT=3000
    --name api-assessment-dev
    puuga/api-assessment:latest
```
