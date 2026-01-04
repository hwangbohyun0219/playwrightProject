class LoginSuccess {
  constructor(page) {
    this.page = page;
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
    //1두번째 팝업으로 넘어가기 전에 다른 팝업이 잠깐 깜박이기 때문에 정석적인 방식이 안 통함
    // const [popup] = await Promise.all([
    //   this.page.context().waitForEvent("popup"),
    //   this.page.click("#LoginForm > div.login_sns > ul > li:nth-child(1) > a"),
    // ]);

    //2위의 방법이 통하지 않아 다시 조사한 결과 같은 팝업에서 주소만 바뀌는 것으로 파악함
    // this.page.context().waitForEvent("popup", {
    //   predicate: (p) => p.url().includes("naver"),
    // });
    // const popup = await naverPopupPromise;

    //바로 위의 방법으로 바로 성공!
    await this.page.click(
      "#LoginForm > div.login_sns > ul > li:nth-child(1) > a"
    );
    let naverPopupPromise;
    while (!naverPopupPromise) {
      naverPopupPromise = this.page
        .context()
        .pages()
        .find((p) => p.url().includes("naver"));
    }
    await naverPopupPromise.locator("#id").waitFor({ state: "visible" });
    await naverPopupPromise.locator("#id").fill(naverId);
    await naverPopupPromise.locator("#pw").fill(naverPw);
    await naverPopupPromise.locator("#log\\.login").click();
  }
}

export default LoginSuccess;
