<img src="https://cdn.idntimes.com/content-images/post/20240407/tangkapan-layar-2024-04-07-pukul-181629-d214dfc52f7ca16367962e833d02d336_600x400.png" alt="banner" style="height: 250px; object-fit: cover;" />

**Best Female Vote**

Ini adalah alat untuk melakukan voting Zee JKT48 dari suatu polling online [_Best Female Of The Years 2024_](https://updatebanget.info/polling-online-best-female-of-the-years-2024/).

**Prerequisites**
- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com) (optional)

**Installation**

Bun
```console
$ bun install
$ bun index.ts
```

Docker
```console
$ docker build --pull -t best-female-vote .
$ docker run -d best-female-vote
```

Docker Compose
###### docker-compose.yml
```yml
services:
  best-female-vote:
    container_name: best-female-vote
    build: ./path/to/best-female-vote
    restart: unless-stopped
```
```console
$ docker compose up -d best-female-vote
```
