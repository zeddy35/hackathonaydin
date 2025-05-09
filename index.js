const express = require('express');
const path = require('path');
const app = express();

// EJS'i kullanmak için view engine olarak ayarla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // views klasörünü doğru ayarla

// Ana sayfa route'u
app.get('/', (req, res) => {
  res.render('index'); // index.ejs dosyasını render et
});

// Sunucu başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
