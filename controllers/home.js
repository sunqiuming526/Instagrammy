module.exports = {
  index: (req, res) => {
    // res.send('The home: index controller');
    const viewModel = {
      images: [
        {
          uniqueId: 1,
          title: '示例图片1',
          description: '',
          filename: 'sample1.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        },
        {
          uniqueId: 2,
          title: '示例图片2',
          description: '',
          filename: 'sample2.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        },
        {
          uniqueId: 3,
          title: '示例图片3',
          description: '',
          filename: 'sample3.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        }
      ]
    };
    res.render('index', viewModel);
  }
};
