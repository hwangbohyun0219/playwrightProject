import { test, expect } from "@playwright/test";
import LoginSuccess from "../Classpages/loginSuccess";

test("로그인 성공", async ({ page }) => {
  const aladinMainPage = new LoginSuccess(page);
  await page.goto("https://www.aladin.co.kr");
  const firstPopup = await aladinMainPage.loginPopup();
  const naverPopup = new LoginSuccess(firstPopup);
  await naverPopup.loginWithNaver("hbhyun3102", "hbhyun0219!");
});
