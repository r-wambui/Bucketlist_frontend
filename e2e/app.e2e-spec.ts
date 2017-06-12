import { BucketlistfrontPage } from './app.po';

describe('bucketlistfront App', function() {
  let page: BucketlistfrontPage;

  beforeEach(() => {
    page = new BucketlistfrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
