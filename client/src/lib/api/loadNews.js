import client from "./client";

//뉴스 데이터 불러옴
export const loadNews = () => client.post('/api/news', '날씨');