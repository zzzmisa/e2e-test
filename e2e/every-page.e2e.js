const urls = [
  'https://blog.zzzmisa.com/',
  'https://blog.zzzmisa.com/about/',
  'https://blog.zzzmisa.com/amp/about/',
  'https://curryjack.zzzmisa.com/',
  'https://curryjack.zzzmisa.com/en/#/',
  'https://featured-image-maker.zzzmisa.com/',
  'https://featured-image-maker.zzzmisa.com/en/',
  'https://japan-github-ranking.zzzmisa.com/',
  'https://odekake.zzzmisa.com/',
  'https://odekake.zzzmisa.com/about/',
  'https://odekake.zzzmisa.com/amp/about/',
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
