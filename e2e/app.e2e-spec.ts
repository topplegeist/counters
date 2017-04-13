import { MagicLifeCountersPage } from './app.po';

describe('magic-life-counters App', () => {
  let page: MagicLifeCountersPage;

  beforeEach(() => {
    page = new MagicLifeCountersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
