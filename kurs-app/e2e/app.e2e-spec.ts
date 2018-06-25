import { KursAppPage } from './app.po';

describe('kurs-app App', function() {
  let page: KursAppPage;

  beforeEach(() => {
    page = new KursAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
