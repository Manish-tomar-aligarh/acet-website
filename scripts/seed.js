// scripts/seed.js (commonjs)
require('dotenv').config();
const mongoose = require('mongoose');
const Notice = require('../src/models/Notice').default;

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Notice.deleteMany({});
  await Notice.insertMany([
    { title: 'College closed on 2 Oct', body: 'Gandhi Jayanti holiday', tags: ['holiday'] },
    { title: 'Placement drive', body: 'Placement drive on 10 Oct. Register soon.', tags: ['placement'] },
  ]);
  console.log('Seeded notices');
  process.exit();
}

run().catch(e => { console.error(e); process.exit(1); });
