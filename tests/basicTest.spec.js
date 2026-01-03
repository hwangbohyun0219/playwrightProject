// const { test, expect } = require("@playwright/test");

// // 이 구조는 Playwright 공식 문서에서 권장하는 가장 기초적인 틀입니다.
// test.describe("기본 동작 테스트", () => {
//   test("구글 접속 테스트", async ({ page }) => {
//     // 1. 구글 페이지로 이동
//     await page.goto("https://www.google.com");

//     // 2. 검색창이 나타날 때까지 최대 5초 대기 (안정성 확보)
//     const searchbox = page.locator('textarea, input[type="search"]').first();
//     await expect(searchbox).toBeVisible({ timeout: 5000 });

//     // 3. 글자 입력
//     await searchbox.fill("Playwright 실행 성공");

//     // 4. 결과 확인을 위해 3초간 멈춤
//     await page.waitForTimeout(3000);

//     console.log("브라우저가 정상적으로 실행되었습니다!");

//     await page.pause();
//   });
// });
