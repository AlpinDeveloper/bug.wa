const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/ban', (req, res) => {
    const { target, method } = req.body;

    if (!target || !method) {
        return res.status(400).json({ success: false, message: 'Target dan metode wajib diisi' });
    }

    console.log(`Proses ban: ${target} | Metode: ${method}`);
    const success = Math.random() > 0.2;

    if (success) {
        res.json({ success: true, message: `Nomor ${target} berhasil di-ban dengan metode ${method}` });
    } else {
        res.json({ success: false, message: `Gagal ban nomor ${target}, coba lagi` });
    }
});

app.listen(PORT, () => {
    console.log(`API berjalan di http://localhost:${PORT}`);
});
