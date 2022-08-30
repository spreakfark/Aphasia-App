import ghpages from 'gh-pages'

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    remove: "!.nojekyll",
    repo: 'https://github.com/spreakfark/Aphasia-App.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);