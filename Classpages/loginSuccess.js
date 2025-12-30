class LoginSuccess {
  constructor(page) {
    this.page = page;
    this.naverId = page.locator('document.querySelector("#id")');
    this.naverPw = page.locator('document.querySelector("#pw")');
    this.naverLoginBtn = page.locator("");
  }
  async loginPopup() {
    const [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.page.click(
        'document.querySelector("#headerTop_util > li:nth-child(1) > a")'
      ),
    ]);
  }
  async loginWithNaver(naverId, naverPw) {
    const [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.page.click(
        'document.querySelector("#LoginForm > div.login_sns > ul > li:nth-child(1) > a")'
      ),
    ]);
    await popup.fill(naverId, "hbhyun3102");
    await popup.fill(naverPw, "hbhyun0219!");
  }
}

export default LoginSuccess;
