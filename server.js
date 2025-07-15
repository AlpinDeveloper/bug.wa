const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/ban', (req, res) => {
    const { target, method } = req.body;

    if (!target || !method) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    // Simulasi tindakan
    console.log(`Menyerang ${target} dengan metode ${method}`);
    res.json({ success: true, message: `Target ${target} sedang diproses dengan ${method}` });
});

app.listen(PORT, () => {
    console.log(`API berjalan di http://localhost:${PORT}`);
});
