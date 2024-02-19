This is a homework on NestJS and CRUD operations.

expense-manager აპლიკაციაში დავამატოთ middleware რომელიც ყველა რექუესთზე დალოგავ user-agentს.
შექმნის და განახლების როუტერბს დავამატოთ ვალიდაცია validation-pipeის გამოყენებით.
დავამატოთ გლობალური გარდი რომელიც რაღაც ლოგიკით ან გაატარებს რექუესთს ან დაბლოკავს. (ლოგიკა თქვენით მოიფიქრეთ)
update, delete, create როუტებს დავამატოთ გარდი რომელიც req.headersში შეამოწმებს თუ არსებოს ფროფერთი is-admin და აქვს მნიშვნელობა true, წინააღმდეგ შემთხვევაში არ გაატაროს რექუესთი.
get როუტს დავუმატოთ გარდი რომელიც შეამოწმებს req.headersში თუ არსებოს ფროფერთი api-key და აქვს წინაწარ განსაზღვრული მნიშვნელობა, წინააღმდეგ შემთხვევაში არ გაატაროს რექუესთი.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
