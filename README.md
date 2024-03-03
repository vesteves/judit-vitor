# Raciocínio

Escolhi o **Koa** como framework por ter entendido, durante a call de apresentaçã0, que as requisiçôes HTTP internamente são feitas neste framework.

Uso o **koa-router** para ficar mais próximo do framework Express no qual estou bem mais acostumado.

Inicio o _tsconfig.json_ com o `outdir` apontando para a pasta `dist` e com `rootDir` apontando para a pasta `src` para dividir os arquivos do server e da source.

Crio 2 scripts para me auxiliar no desenvolvimento:

```
  "scripts": {
    "dev": "ts-node src/main.ts",
    "start": "tsc && nodemon dist/main.js"
  },
```

Crio um _docker_compose.yml_ para deixar disponível 2 containers:

- judit-mongo: serviço do mongo;
- judit-express-mongo: interface gráfica para acesso ao mongo;

Escolho a estrutura de Repository, Controller, Model, Factory, Service e Route para os módulos criados.

Crio 2 mongoose Schema onde um será para a listas e outro para o CNJ.

Toda a estrutura foi criada na mão sem utilização de boilerplate.

## Débitos técnicos por falta de tempo

- Não criei testes unitários;
- Não validei os inputs. Pretendia instalar o Zod;
- Não iniciei o eslint;
- Não coloquei o node como container no docker-compose;
- Não criei um fluxo de deploy da aplicação;
- Não criei migrations para inserir automaticamente, no primeiro load, as listas. Criei apenas uma rota para adicionar manualmente uma à uma;
