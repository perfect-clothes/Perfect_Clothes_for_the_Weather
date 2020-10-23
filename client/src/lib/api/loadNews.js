import client from "./client";

//뉴스 데이터 불러옴
export const loadNews = weather => client.post('/api/news', weather);