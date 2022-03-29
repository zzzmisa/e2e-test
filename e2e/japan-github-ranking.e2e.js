describe('Japan GitHub Ranking', () => {
  let text = '';
  beforeAll(async () => {
    await page.goto('https://japan-github-ranking.zzzmisa.com/');
    text = await page.evaluate(() => document.body.textContent);
  });
  test('Last Update Timeが今日になっていること', async () => {
    const date = new Date();
    expect(text).toContain(`Last Update Time: ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`);
  });
  test('ランキングが50位まで表示されていること', async () => {
    expect(text).toContain('50位');
  });
});
