class LoginSuccess {
  constructor(page) {
    this.page = page;
    this.popupPage = null;
  }
  //로그인 버튼 선택시 알라딘에서 제공하는 sns 아이콘이 있는 팝업 노출
  async loginPopup() {
    const [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.page.click("#headerTop_util > li:nth-child(1) > a"),
    ]);
    return popup;
  }
  //naver sns 아이콘 선택시 네이버 로그인 팝업 노출되고 최종 로그인 진행
  //아이디, 비밀번호 암호화할 것!!!!!!
  async loginWithNaver(naverId, naverPw) {
    const [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.page.click("#LoginForm > div.login_sns > ul > li:nth-child(1) > a"),
    ]);
    popup.fill("#id", naverId);
    popup.fill("#pw", naverPw);
    popup.click(this.page.locator("#log\\.login"));
  }
}

export default LoginSuccess;
