describe('index', () => {
  it('mount', () => {
    document.body.innerHTML = '<div id=root />';
    require('./index.tsx');
  });
});
