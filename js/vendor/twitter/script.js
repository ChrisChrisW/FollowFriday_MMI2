twttr.widgets.createTimeline(
  {
    sourceType: 'profile',
    screenName: 'twitterdev'
  },
  document.getElementById('twitter-wjs'),
  {
    width: '1000',
    height: '200',
    related: 'twitterdev,twitterapi'
  }).then(function (el) {
    console.log('Embedded a timeline.')
  });
