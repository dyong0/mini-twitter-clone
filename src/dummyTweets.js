export default Array.from(Array(30).keys()).map((id) => ({
  id: id,
  username: `username${id}`,
  userId: `user__id_${id}`,
  tweetedAt: '2018-06-10T10:22:33+09:00',
  content: 'Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia no'.slice(Math.floor(Math.random()*255)),
  retweetCount: Math.floor((Math.random() * 100)),
  heartCount: Math.floor((Math.random() * 1000)),
}))