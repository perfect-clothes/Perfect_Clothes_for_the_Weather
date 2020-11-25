# Perfect Clothes for the Weather

## 🖇 Link
- [✨ Our Website URL ✨](http://weatherwear.tk/)
- [Github Organization](https://github.com/perfect-clothes)
- [Notion Workspace](https://www.notion.so/huijooooo/Perfect-Clothes-for-the-Weather-f0c2294664244404871603bf336f0322)
<br>

## ⛳️ Purpose
- Server-Client communication exercise (서버-클라이언트 통신 연습)
- Collaborative development with Git (Git을 사용한 개발 협업)
<br>

## 💡 About
### Subject
- Recommend clothes for the weather (날씨에 맞춰 옷 추천하기)

### Features
1. **Recommend clothes for the weather (날씨에 맞는 옷차림 추천)**
    - Clothes for the current weather (현재 날씨에 맞는 옷)
2. **Weather check (날씨 확인)**
    - Current weather in your area (해당 지역의 현재 날씨)
    - All weather in the area every 3 hours (해당 지역의 날씨를 3시간 마다)
    - Allow user location permission to check the weather at that location (사용자 위치 권한을 허용하면 그 위치의 날씨 확인 가능)
    - City search available (도시 검색으로 원하는 도시의 날씨 확인)
3. **Weather news (날씨 관련 기사 확인)**

### Prototype
- [Figma Link](https://www.figma.com/proto/naG6gaAEaDOcrGQS4Dfboq/Perfect_Clothes_for_the_weather?embed_host=notion&kind=&node-id=4%3A2&scaling=min-zoom)
<br>

## 🧑‍💻 Skills
### Programming
- React.js
- Node.js
- MySQL

### DevOps
- AWS S3
- AWS RDS
- AWS EC2
- Jenkins
- Github
<br>

## 🚗 How to run
- Since the server is on AWS's EC2, there is no need to run the server locally.<br>
(서버가 AWS의 EC2에 있기 때문에, 로컬에서 서버를 구동시킬 필요가 없습니다.)
- You can also use **npm** instead of **yarn**.<br>
(**yarn** 대신 **npm**을 사용할 수 있습니다.)
```bash
# Go to the 'client' directory
cd client

# Install the dependancies
yarn install

# Start the project
yarn start
```
- If you want to run the server locally, do the following:<br>
(만약 서버를 로컬에서 구동 시키고 싶다면, 아래와 같이 하세요.)
```bash
# Go to the 'server' directory
cd server

# Install the dependancies
npm install

# Run the server
node app.js
```