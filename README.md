# ts/node/express 보일러 플레이트

히스토리 : [링크](https://velog.io/@walrus811/%ED%95%99%EC%83%9D-%EA%B4%80%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C-2-API-%EB%B3%B4%EC%9D%BC%EB%9F%AC-%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8A%B8nodeexpressts)

**Package.json***

```json
{
  "name": "project-a-server",
  "version": "1.0.0",
  "description": "Sutdent Management System REST API Server",
  "main": "dist/index.js",
  "scripts": {
    "build": "npx tsc",
    "start": "node .",
    "dev": "npx cross-env DEBUG=* npx nodemon"
  },
  "keywords": [],
  "author": "rayray",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "debug": "^4.3.3",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "http-errors": "^2.0.0",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/debug": "^4.1.7",
    "@types/express": "^4.17.13",
    "@types/http-errors": "^1.8.1",
    "@types/jest": "^27.0.3",
    "@types/morgan": "^1.9.3",
    "@types/node": "^17.0.0",
    "@typescript-eslint/eslint-plugin": "^5.7.0",
    "@typescript-eslint/parser": "^5.7.0",
    "cross-env": "^7.0.3",
    "eslint": "^8.5.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.4.5",
    "nodemon": "^2.0.15",
    "prettier": "^2.5.1",
    "rimraf": "^3.0.2",
    "ts-node": "^10.4.0",
    "typescript": "^4.5.4"
  }
}
```
