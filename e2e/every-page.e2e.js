const urls = [
  'https://blog.zzzmisa.com/',
  'https://curryjack.zzzmisa.com/',
  'https://featured-image-maker.zzzmisa.com/',
  'https://japan-github-ranking.zzzmisa.com/',
  'https://odekake.zzzmisa.com/',
  'https://zzzmisa.com/',
];

urls.forEach((element) => {
  describe('エラーが無いこと', () => {
    test('コンソールエラーが無いこと', async () => {
      page.on('pageerror', (error) => {
        console.log('consoleエラー', error.message);
      });
      await page.goto(element);
    });
    test('通信エラーが無いこと', async () => {
      page.on('response', (response) => {
        if (399 > response.status() && 200 <= response.status()) {
          return;
        } else {
          console.log('status error', response.status(), response.url());
        }
      });
      await page.goto(element);
    });
  });
});
