// Media configuration for embedding YouTube videos
// videos can be strings (video IDs) or objects { id, caption }
const media = {
  channelUrl: 'https://youtube.com/@arthalaalleiahcharitabletrust',
  videos: [
    { id: 'VEGVdHX7mL4', caption: 'Blood camp — highlights' },
    { id: 'Ra8ObpxOsO0', caption: 'Blood donation short' },
    { id: 'V1-QA-cOge0', caption: 'Food donation — community meal' }
  ],
  localVideos: [
    { src: '/videos/food-donation.mp4', caption: 'Local food donation video' }
  ]
};

export default media;
