import { AngularChatBotPage } from './app.po';

describe('angular-chat-bot App', function() {
  let page: AngularChatBotPage;

  beforeEach(() => {
    page = new AngularChatBotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
