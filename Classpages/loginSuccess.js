class LoginSuccess {
  constructor(page) {
    this.page = page;
    this.naverId = page.locator('document.querySelector("#id")');
    this.naverPw = page.locator('document.querySelector("#pw")');
    this.naverLoginBtn = page.locator("네이버팝업에서 로그인 버튼 JS 경로");
  }
  //로그인 버튼 선택시 알라딘에서 제공하는 sns 아이콘이 있는 팝업 노출
  async loginPopup() {
    const [popup] = await Promise.all([
      this.page.click(
        'document.querySelector("#headerTop_util > li:nth-child(1) > a")'
      ),
      this.page.waitForEvent("popup"),
    ]);
  }
  //naver sns 아이콘 선택시 네이버 로그인 팝업 노출되고 최종 로그인 진행
  //아이디, 비밀번호 암오화할 것!!!!!!
  async loginWithNaver(naverId, naverPw) {
    const [popup] = await Promise.all([
      this.page.click(
        'document.querySelector("#LoginForm > div.login_sns > ul > li:nth-child(1) > a")'
      ),
      this.page.waitForEvent("popup"),
    ]);
    await popup.fill(naverId, "hbhyun3102");
    await popup.fill(naverPw, "hbhyun0219!");
    await popup.click(this.naverLoginBtn);
  }
}

export default LoginSuccess;
