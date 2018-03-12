module.exports = [
  {
    'id': 1,
    'title': 'Babel 6.xでErrorとかArrayをextendsしたときの挙動がおかしい',
    'updated': '2016-04-26 11:16:45',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 10,
    'title': 'Gitで2つ以上前のコミットに統合する',
    'updated': '2015-07-14 10:01:05',
    'body': '一つ前のコミットに統合するのは`git commit --amend -C HEAD`とかでいけるんだけど2つ以上前になるとめんどい。```',
    'user': 'MyUserName'
  },
  {
    'id': 2,
    'title': 'GraphQLでNonNullなList',
    'updated': '2016-04-24 12:32:50',
    'body': '```javascript\nclass Sample ```こんな感じで文章かく',
    'user': 'MyUserName'
  },
  {
    'id': 3,
    'title': 'ES6でN個の配列',
    'updated': '2016-03-21 21:02:10',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 4,
    'title': 'ShadowDOMの外から内部の要素を取得する',
    'updated': '2016-03-21 23:12:30',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 5,
    'title': 'Shadow-Piercing descendant combinator is deprecated',
    'updated': '2016-03-10 18:32:00',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 6,
    'title': '小さいReactアプリケーションのためのライブラリ書いた',
    'updated': '2016-03-18 22:10:42',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 7,
    'title': 'ESLintの設定をscoped packageでnpmにあげて使い回す',
    'updated': '2016-04-07 11:48:22',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 8,
    'title': 'Herokuでreact-railsのサーバーサイドレンダリングがTimeoutしてハマった話',
    'updated': '2016-02-02 23:10:01',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  },
  {
    'id': 9,
    'title': 'browserify + npmでReactを使う場合はNODE_ENVを設定するとよい',
    'updated': '2015-07-29 02:10:09',
    'body': '```javascript\nclass FooError extends Error {}\nconsole.log(new FooError() instanceof FooError); //=> false\nconsole.log(new FooError() instanceof Error); //=> true\n\nclass SampleArray extends Array {}\nconsole.log(new SampleArray() instanceof SampleArray); //=> false\nconsole.log(new SampleArray() instanceof Array);```',
    'user': 'MyUserName'
  }
]
